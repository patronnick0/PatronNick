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

function mostrarResultados(nombre) {
  topBar.classList.add("show");
  generatorSection.style.display = "block";
  games.style.display = "none";
  categoriasTitulo.style.display = "none";

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
  });
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

async function actualizarEstadisticaNombre(nombre) {
  const item = obtenerElementoCategoriaPorNombre(nombre);
  if (!item) return;

  const estadisticas = await obtenerEstadisticas(nombre);
  const copias = item.querySelector(".copiasNombre");
  const favoritos = item.querySelector(".favoritosNombre");

  if (copias) copias.textContent = `📋 ${estadisticas.copias}`;
  if (favoritos) favoritos.textContent = `❤️ ${estadisticas.favoritos}`;
}

function crearTarjetaCategoria(nombre) {
  return `
    <div class="itemInvisible tarjetaCategoria" data-nombre="${nombre}">
      <div class="tarjetaCategoriaHeader">
        <span class="nombreCategoria">${nombre}</span>

        <button
          class="favoriteInvisible"
          data-text="${nombre}"
          type="button"
        >
          ${esFavorito(nombre) ? "❤️ Guardado" : "⭐ Favorito"}
        </button>
      </div>

      <div class="tarjetaCategoriaFooter">
        <div class="estadisticasNombre">
          <span class="copiasNombre">📋 0</span>
          <span class="favoritosNombre">❤️ 0</span>
        </div>

        <button
          class="copyInvisible"
          data-text="${nombre}"
          type="button"
        >
          📋 Copiar
        </button>
      </div>
    </div>
  `;
}

async function renderCategoria(tituloCategoria, nombres) {
  topBar.classList.remove("show");
  ocultarPanelFavoritos();
  limpiarResultados();
  contenido.style.display = "block";

  contenido.innerHTML = `
    <div class="pantallaJuego">
      <button id="volverMenu" class="back-btn">← Volver</button>

      <h2 class="tituloJuego">${tituloCategoria}</h2>

      <div class="listaInvisible">
        ${nombres.map((nombre) => crearTarjetaCategoria(nombre)).join("")}
      </div>
    </div>
  `;

  contenido.querySelectorAll(".copyInvisible").forEach((boton) => {
    const nombre = boton.dataset.text;

    boton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(nombre);

        const correcto = await registrarCopia(nombre);
        if (!correcto) return;

        boton.textContent = "✅ Copiado";

        setTimeout(() => {
          boton.textContent = "📋 Copiar";
        }, 1200);

        await actualizarEstadisticaNombre(nombre);
      } catch (error) {
        console.error("Error copiando nombre:", error);
      }
    });
  });

  contenido.querySelectorAll(".favoriteInvisible").forEach((boton) => {
    const nombre = boton.dataset.text;

    boton.addEventListener("click", async () => {
      if (boton.dataset.procesando === "true") return;
      boton.dataset.procesando = "true";

      try {
        if (esFavorito(nombre)) {
          const correcto = await decrementarFavorito(nombre);
          if (correcto) {
            eliminarFavorito(nombre);
            boton.textContent = "⭐ Favorito";
          }
        } else {
          const correcto = await registrarFavorito(nombre);
          if (correcto) {
            agregarFavorito(nombre);
            boton.textContent = "❤️ Guardado";
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

  await Promise.all(
    nombres.map(async (nombre) => {
      await actualizarEstadisticaNombre(nombre);
    })
  );

  const botonVolver = document.getElementById("volverMenu");
  if (botonVolver) {
    botonVolver.addEventListener("click", mostrarFreeFire);
  }
}

function renderFavoritos() {
  abrirFavoritos.style.display = "none";
  const guardados = obtenerFavoritos();

  topBar.classList.add("show");

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