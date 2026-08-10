function actualizarContadorFavoritos() {
  if (typeof contadorFavoritos === "undefined" || !contadorFavoritos) return;
  contadorFavoritos.textContent = `(${obtenerFavoritos().length})`;
}

function ocultarPanelFavoritos() {
  if (typeof panelFavoritos === "undefined" || !panelFavoritos) return;
  panelFavoritos.style.display = "none";
  panelFavoritos.innerHTML = "";
}

function mostrarZonaFavoritos() {
  if (typeof zonaFavoritos === "undefined" || !zonaFavoritos) return;
  zonaFavoritos.style.display = "flex";
}

function ocultarZonaFavoritos() {
  if (typeof zonaFavoritos === "undefined" || !zonaFavoritos) return;
  zonaFavoritos.style.display = "none";
  ocultarPanelFavoritos();
}

function limpiarContenido() {
  if (typeof contenido === "undefined" || !contenido) return;
  contenido.style.display = "none";
  contenido.innerHTML = "";
}

function limpiarResultados() {
  if (typeof resultados === "undefined" || !resultados) return;
  resultados.innerHTML = "";
}

function mostrarInicio() {

    const siteFooter = document.getElementById("siteFooter");

    if (siteFooter) {
        siteFooter.style.display = "flex";
    }
    const infoHome = document.getElementById("infoHome");

    if (infoHome) {
    infoHome.style.display = "block";
    }
    topBar.classList.remove("show");
    abrirFavoritos.style.display = "";

    document.querySelector(".hero").style.display = "block";
    document.querySelector(".generator").style.display = "block";
    document.querySelector(".games").style.display = "grid";
    document.querySelector(".categorias").style.display = "block";

    mostrarZonaFavoritos();
    limpiarResultados();
    limpiarContenido();
    ocultarPanelFavoritos();
    actualizarContadorFavoritos();

    inputNombre.focus();
}

function obtenerClienteSupabase() {
  if (typeof window.supabaseClient !== "undefined" && window.supabaseClient) {
    return window.supabaseClient;
  }

  if (typeof supabaseClient !== "undefined" && supabaseClient) {
    return supabaseClient;
  }

  return null;
}


function aplicarEstadoBotonFavorito(boton, estaActivo) {
  if (!boton) return;
  boton.classList.toggle("favorito-activo", Boolean(estaActivo));
}

function dispararEfectoFavorito(boton) {
  if (!boton) return;
  boton.classList.remove("fav-clicked");
  void boton.offsetWidth;
  boton.classList.add("fav-clicked");
  window.clearTimeout(boton._favEffectTimeout);
  boton._favEffectTimeout = window.setTimeout(() => {
    boton.classList.remove("fav-clicked");
  }, 520);
}

function mostrarEstadoCopiado(card) {
  if (!card) return;

  const overlay = card.querySelector(".copiadoOverlay");
  const texto = overlay?.querySelector(".copiadoTexto");
  if (!overlay || !texto) return;

  window.clearTimeout(card._copiadoTimeout);

  card.classList.remove("copiado-activo");
  overlay.classList.remove("copiado-visible");
  texto.classList.remove("copiado-texto-activo");

  void card.offsetWidth;
  void overlay.offsetWidth;
  void texto.offsetWidth;

  card.classList.add("copiado-activo");
  overlay.classList.add("copiado-visible");
  texto.classList.add("copiado-texto-activo");

  card._copiadoTimeout = window.setTimeout(() => {
    texto.classList.remove("copiado-texto-activo");
    overlay.classList.remove("copiado-visible");
    card.classList.remove("copiado-activo");
  }, 3000);
}

async function copiarTarjetaInteractiva(card, texto) {
  const textoOriginal = String(texto ?? "");
  if (!textoOriginal.length) return false;

  try {
    await navigator.clipboard.writeText(textoOriginal);
    mostrarEstadoCopiado(card);
    return true;
  } catch (error) {
    console.error("Error copiando texto:", error);
    return false;
  }
}

async function obtenerEstadisticas(nombre) {
  const client = obtenerClienteSupabase();

  if (!client) {
    console.error("Supabase no está disponible.");
    return { copias: 0, favoritos: 0 };
  }

  const { data, error } = await client
    .from("estadisticas_nombres")
    .select("copias, favoritos")
    .eq("nombre", nombre)
    .maybeSingle();

  if (error) {
    console.error("Error obteniendo estadísticas:", error);
    return { copias: 0, favoritos: 0 };
  }

  return data || { copias: 0, favoritos: 0 };
}

async function registrarCopia(nombre) {
  const client = obtenerClienteSupabase();
  if (!client) return false;

  const { error } = await client.rpc("incrementar_copias", {
    p_nombre: nombre,
  });

  if (error) {
    console.error("Error registrando copia:", error);
    return false;
  }

  return true;
}

async function registrarFavorito(nombre) {
  const client = obtenerClienteSupabase();

  if (!client) {
    console.error("Supabase no está disponible.");
    return false;
  }

  const { error } = await client.rpc("incrementar_favoritos", {
    p_nombre: nombre,
  });

  if (error) {
    console.error("Error registrando favorito:", error);
    return false;
  }

  return true;
}

async function decrementarFavorito(nombre) {
  const client = obtenerClienteSupabase();

  if (!client) {
    console.error("Supabase no está disponible.");
    return false;
  }

  const { error } = await client.rpc("decrementar_favoritos", {
    p_nombre: nombre,
  });

  if (error) {
    console.error("Error restando favorito:", error);
    return false;
  }

  return true;
}

function obtenerElementoCategoriaPorNombre(nombre) {
  if (typeof contenido === "undefined" || !contenido) return null;

  return [...contenido.querySelectorAll(".tarjetaCategoria")].find(
    (item) => item.dataset.nombre === nombre
  );
}

function obtenerElementoResultadoPorNombre(nombre) {
  if (typeof resultados === "undefined" || !resultados) return null;

  return [...resultados.querySelectorAll(".resultado")].find(
    (item) => item.dataset.texto === nombre
  );
}

async function actualizarEstadisticaNombre(nombre) {
  const item = obtenerElementoCategoriaPorNombre(nombre);
  if (!item) return;

  const estadisticas = await obtenerEstadisticas(nombre);
  const copias = item.querySelector(".copiasNombre");
  const favoritos = item.querySelector(".favoritosNombre");

  if (copias) copias.textContent = `📋 ${estadisticas.copias}`;
  if (favoritos) favoritos.textContent = `❤️ ${estadisticas.favoritos}`;

  if (typeof actualizarCacheEstadisticasNombre === "function") {
    actualizarCacheEstadisticasNombre(nombre, estadisticas);
  }
}

async function actualizarEstadisticaResultado(nombre) {
  const item = obtenerElementoResultadoPorNombre(nombre);
  if (!item) return;

  const estadisticas = await obtenerEstadisticas(nombre);
  const copias = item.querySelector(".copiasNombre");
  const favoritos = item.querySelector(".favoritosNombre");

  if (copias) copias.textContent = `📋 ${estadisticas.copias}`;
  if (favoritos) favoritos.textContent = `❤️ ${estadisticas.favoritos}`;
}

function crearTarjetaCategoria(nombre) {
  return `
    <div class="itemInvisible tarjetaCategoria tarjetaCopiable" data-nombre="${nombre}">
      <button
        class="favoriteInvisible"
        data-text="${nombre}"
        type="button"
      >
        ${esFavorito(nombre) ? "❤️ Favorito" : "⭐ Favorito"}
      </button>

      <div class="nombreCategoria">${nombre}</div>

      <div class="estadisticasNombre">
        <span class="copiasNombre">📋 0</span>
        <span class="favoritosNombre">❤️ 0</span>
      </div>

      <span class="copiadoOverlay" aria-hidden="true"><span class="copiadoTexto">COPIADO</span></span>
    </div>
  `;
}

function renderCopiarTexto(boton, texto) {
  boton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(String(texto ?? ""));

      boton.textContent = "✅ Copiado";

      setTimeout(() => {
        boton.textContent = "📋 Copiar";
      }, 1200);
    } catch (error) {
      console.error("Error al copiar:", error);
      boton.textContent = "❌ Error";

      setTimeout(() => {
        boton.textContent = "📋 Copiar";
      }, 1200);
    }
  });
}

async function mostrarResultados(nombre) {
  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "none";
  }
  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "none";
  }

  topBar.classList.add("show");

  generatorSection.style.display = "block";
  games.style.display = "none";
  categoriasTitulo.style.display = "none";

  // Ocultar TikTok al mostrar resultados
  const tiktokBtn = document.querySelector(".tiktok-btn");

  if (tiktokBtn) {
    tiktokBtn.style.display = "none";
  }

  ocultarZonaFavoritos();
  limpiarContenido();
  limpiarResultados();

  const titulo = document.createElement("p");
  titulo.style.color = "#cbd5e1";
  titulo.style.marginBottom = "14px";
  titulo.style.fontSize = "18px";
  titulo.textContent = `Resultados para: ${nombre}`;
  resultados.appendChild(titulo);

  const estilos = generarEstilos(nombre);

  if (!estilos.length) {
    const vacio = document.createElement("p");
    vacio.style.color = "#cbd5e1";
    vacio.textContent = "No se generaron resultados.";
    resultados.appendChild(vacio);
    return;
  }

  estilos.forEach((item, index) => {
    const card = crearTarjetaResultado(item);
    card.style.animationDelay = `${index * 0.04}s`;
    resultados.appendChild(card);

    actualizarEstadisticaResultado(item.texto);
  });
}

function renderCategoria(tituloCategoria, nombres) {
  topBar.classList.remove("show");
  ocultarPanelFavoritos();
  limpiarResultados();
  contenido.style.display = "block";
  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "none";
  }

  contenido.innerHTML = `
    <div class="pantallaJuego">
      <button id="volverMenu" class="back-btn">← Volver</button>

      <h2 class="tituloJuego">${tituloCategoria}</h2>

      <div class="listaInvisible">
        ${nombres.map((nombre) => crearTarjetaCategoria(nombre)).join("")}
      </div>
    </div>
  `;

  contenido.querySelectorAll(".tarjetaCategoria").forEach((tarjeta) => {
    const nombre = tarjeta.dataset.nombre;
    const siteFooter = document.getElementById("siteFooter");

    if (siteFooter) {
      siteFooter.style.display = "none";
   }  
    tarjeta.addEventListener("click", async (event) => {
      if (event.target.closest(".favoriteInvisible")) return;
      if (tarjeta.dataset.procesando === "true") return;

      tarjeta.dataset.procesando = "true";

      try {
        const correcto = await copiarTarjetaInteractiva(tarjeta, nombre);
        if (!correcto) return;

        const copiaRegistrada = await registrarCopia(nombre);
        if (copiaRegistrada) {
          actualizarEstadisticaNombre(nombre);
        }
      } catch (error) {
        console.error("Error copiando nombre de categoría:", error);
      } finally {
        tarjeta.dataset.procesando = "false";
      }
    });
  });

  contenido.querySelectorAll(".favoriteInvisible").forEach((boton) => {
    const nombre = boton.dataset.text;
    aplicarEstadoBotonFavorito(boton, esFavorito(nombre));

    boton.addEventListener("click", async (event) => {
      event.stopPropagation();
      dispararEfectoFavorito(boton);

      if (boton.dataset.procesando === "true") return;
      boton.dataset.procesando = "true";

      try {
        if (esFavorito(nombre)) {
          const correcto = await decrementarFavorito(nombre);
          if (correcto) {
            eliminarFavorito(nombre);
            boton.textContent = "⭐ Favorito";
            aplicarEstadoBotonFavorito(boton, false);
          }
        } else {
          const correcto = await registrarFavorito(nombre);
          if (correcto) {
            agregarFavorito(nombre);
            boton.textContent = "❤️ Favorito";
            aplicarEstadoBotonFavorito(boton, true);
          }
        }

        actualizarContadorFavoritos();
        await actualizarEstadisticaNombre(nombre);
      } catch (error) {
        console.error("Error procesando favorito:", error);
      } finally {
        boton.dataset.procesando = "false";
      }
    });
  });

  // No bloqueamos la entrada esperando red. Las estadísticas en caché se
  // muestran inmediatamente y la precarga global las refresca en segundo plano.
  if (typeof actualizarEstadisticasCategoriaEnSegundoPlano === "function") {
    actualizarEstadisticasCategoriaEnSegundoPlano(nombres);
  } else {
    nombres.forEach((nombre) => actualizarEstadisticaNombre(nombre));
  }

  const botonVolver = document.getElementById("volverMenu");
  if (botonVolver) {
    botonVolver.addEventListener("click", mostrarFreeFire);
  }
}

function renderFavoritos() {
  abrirFavoritos.style.display = "none";
  const guardados = obtenerFavoritos();
  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "none";
  }
  topBar.classList.add("show");
  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "none";
  }
  document.getElementById("hero").style.display = "none";
  document.getElementById("generator").style.display = "none";
  document.getElementById("games").style.display = "none";
  document.getElementById("categorias").style.display = "none";

  document.getElementById("contenido").style.display = "none";
  document.getElementById("contenido").innerHTML = "";
  document.getElementById("resultados").innerHTML = "";

  mostrarZonaFavoritos();

  if (!guardados.length) {
    panelFavoritos.innerHTML = `
      <div class="pantallaJuego">
        <p class="favorites-empty">
          Todavía no tienes favoritos guardados.
        </p>
      </div>
    `;
    panelFavoritos.style.display = "block";
    return;
  }

  panelFavoritos.innerHTML = `
    <div class="pantallaJuego">
      <h2 class="tituloJuego">⭐ Favoritos</h2>

      <div class="listaInvisible">
        ${guardados
          .map(
            (nombre) => `
              <div class="itemInvisible">
                <span>${nombre}</span>

                <div class="itemActions">
                  <button class="copyFav" data-text="${nombre}" type="button">
                    📋 Copiar
                  </button>

                  <button class="deleteFav" data-text="${nombre}" type="button">
                    🗑️ Quitar
                  </button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  panelFavoritos.style.display = "block";

  panelFavoritos.querySelectorAll(".copyFav").forEach((boton) => {
    renderCopiarTexto(boton, boton.dataset.text);
  });

  panelFavoritos.querySelectorAll(".deleteFav").forEach((boton) => {
    boton.addEventListener("click", async () => {
      const nombre = boton.dataset.text;

      const correcto = await decrementarFavorito(nombre);
      if (!correcto) return;

      eliminarFavorito(nombre);
      actualizarContadorFavoritos();
      renderFavoritos();
    });
  });
}

function alternarFavoritos() {
  if (panelFavoritos.style.display === "block") {
    ocultarPanelFavoritos();
    return;
  }

  renderFavoritos();
}
