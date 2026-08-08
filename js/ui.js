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

function renderCategoria(tituloCategoria, nombres) {
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
                    <div class="itemInvisible">
                        <span>${nombre}</span>

                        <div class="itemActions">
                            <button class="favCategoria" data-text="${nombre}">
                                ${esFavorito(nombre) ? "❤️ Guardado" : "⭐ Favorito"}
                            </button>

                            <button class="copyInvisible" data-text="${nombre}">
                                📋 Copiar
                            </button>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;

  document.querySelectorAll(".copyInvisible").forEach((boton) => {
    renderCopiarTexto(boton, boton.dataset.text);
  });

  document.querySelectorAll(".favCategoria").forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombre = boton.dataset.text;

      if (esFavorito(nombre)) {
        eliminarFavorito(nombre);
        boton.textContent = "⭐ Favorito";
      } else {
        agregarFavorito(nombre);
        boton.textContent = "❤️ Guardado";
      }

      actualizarContadorFavoritos();
    });
  });

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
                `,
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