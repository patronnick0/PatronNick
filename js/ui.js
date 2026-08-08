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

  if (!client) return;

  const { error } = await client.rpc("incrementar_copias", {
    p_nombre: nombre,
  });

  if (error) {
    console.error("Error registrando copia:", error);
  }
}

async function registrarFavorito(nombre) {
  const client = obtenerClienteSupabase();

  if (!client) return;

  const { error } = await client.rpc("incrementar_favoritos", {
    p_nombre: nombre,
  });

  if (error) {
    console.error("Error registrando favorito:", error);
  }
}

function obtenerElementoCategoriaPorNombre(nombre) {
  return [...contenido.querySelectorAll(".itemInvisible")].find(
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
        ${nombres
          .map(
            (nombre) => `
            <div class="itemInvisible" data-nombre="${nombre}">
              <div class="nombreYStats">
                <span>${nombre}</span>

                <div class="estadisticasNombre">
                  <span class="copiasNombre">📋 0</span>
                  <span class="favoritosNombre">❤️ 0</span>
                </div>
              </div>

              <div class="itemActions">
                <button class="copyInvisible" data-text="${nombre}">
                  📋 Copiar
                </button>

                <button class="favoriteInvisible" data-text="${nombre}">
                  ${esFavorito(nombre) ? "❤️ Guardado" : "⭐ Favorito"}
                </button>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;

  contenido.querySelectorAll(".copyInvisible").forEach((boton) => {
    const nombre = boton.dataset.text;

    boton.addEventListener("click", async () => {
      await navigator.clipboard.writeText(nombre);
      await registrarCopia(nombre);

      boton.textContent = "✅ Copiado";

      setTimeout(() => {
        boton.textContent = "📋 Copiar";
      }, 1200);

      await actualizarEstadisticaNombre(nombre);
    });
  });

  contenido.querySelectorAll(".favoriteInvisible").forEach((boton) => {
    const nombre = boton.dataset.text;

    boton.addEventListener("click", async () => {
      if (esFavorito(nombre)) {
        eliminarFavorito(nombre);
        boton.textContent = "⭐ Favorito";
      } else {
        agregarFavorito(nombre);
        await registrarFavorito(nombre);
        boton.textContent = "❤️ Guardado";
      }

      actualizarContadorFavoritos();
      await actualizarEstadisticaNombre(nombre);
    });
  });

  await Promise.all(
    nombres.map(async (nombre) => {
      const estadisticas = await obtenerEstadisticas(nombre);
      const item = obtenerElementoCategoriaPorNombre(nombre);

      if (!item) return;

      const copias = item.querySelector(".copiasNombre");
      const favoritos = item.querySelector(".favoritosNombre");

      if (copias) copias.textContent = `📋 ${estadisticas.copias}`;
      if (favoritos) favoritos.textContent = `❤️ ${estadisticas.favoritos}`;
    })
  );

  document
    .getElementById("volverMenu")
    .addEventListener("click", mostrarFreeFire);
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
                <button class="copyFav" data-text="${nombre}">
                  📋 Copiar
                </button>

                <button class="deleteFav" data-text="${nombre}">
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
    boton.addEventListener("click", () => {
      eliminarFavorito(boton.dataset.text);
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