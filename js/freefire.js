function crearMenuFreeFire() {
  contenido.innerHTML = `
    <div class="pantallaJuego">

      <h2 class="tituloJuego">🔥 Free Fire</h2>

      <div class="menu-juego">

        <!-- OSCURO -->
        <div class="modo-card">
          <h3>☠️ Oscuro</h3>

          <p>Estilo dark.</p>

          <span class="cantidad-nombres">
            ${categorias.oscuro.length} nombres
          </span>

          <button id="btnOscuro">
            Entrar
          </button>

          <a
            href="nombres-oscuros-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres oscuros →
          </a>
        </div>


        <!-- PAREJAS -->
        <div class="modo-card">
          <h3>💞 Parejas</h3>

          <p>Nombres para dúos.</p>

          <span class="cantidad-nombres">
            ${categorias.parejas.length} nombres
          </span>

          <button id="btnParejas">
            Entrar
          </button>

          <a
            href="nombres-parejas-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres para parejas →
          </a>
        </div>


        <!-- PRO PLAYER -->
        <div class="modo-card">
          <h3>👑 Pro Player</h3>

          <p>Estilo competitivo.</p>

          <span class="cantidad-nombres">
            ${categorias.pro.length} nombres
          </span>

          <button id="btnPro">
            Entrar
          </button>

          <a
            href="nombres-pro-player-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres Pro Player →
          </a>
        </div>


        <!-- INVISIBLE -->
        <div class="modo-card">
          <h3>👻 Invisible</h3>

          <p>Crea nombres invisibles.</p>

          <span class="cantidad-nombres">
            ${categorias.invisible.length} nombres
          </span>

          <button id="btnInvisible">
            Entrar
          </button>

          <a
            href="nombres-invisibles-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres invisibles →
          </a>
        </div>

      </div>

    </div>
  `;


  // OSCURO
  document.getElementById("btnOscuro").addEventListener("click", () => {
    renderCategoria(
      "☠️ Oscuro",
      obtenerOrdenCategoria("oscuro")
    );
  });


  // PAREJAS
  document.getElementById("btnParejas").addEventListener("click", () => {
    renderCategoria(
      "❤️ Parejas",
      obtenerOrdenCategoria("parejas")
    );
  });


  // PRO PLAYER
  document.getElementById("btnPro").addEventListener("click", () => {
    renderCategoria(
      "👑 Pro Player",
      obtenerOrdenCategoria("pro")
    );
  });


  // INVISIBLE
  document.getElementById("btnInvisible").addEventListener("click", () => {
    renderCategoria(
      "👻 Invisible",
      obtenerOrdenCategoria("invisible")
    );
  });
}



function mostrarFreeFire() {

  if (typeof ocultarAvisoNombresNuevos === "function") {
    ocultarAvisoNombresNuevos();
  }

  topBar.classList.add("show");


  // Ocultar información de inicio
  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "none";
  }


  // Ocultar footer
  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  // Ocultar pantalla principal
  document.querySelector(".hero").style.display = "none";

  generatorSection.style.display = "none";

  games.style.display = "none";

  categoriasTitulo.style.display = "none";


  // Ocultar favoritos
  ocultarZonaFavoritos();


  // Limpiar resultados anteriores
  limpiarResultados();


  // Mostrar contenido de Free Fire
  contenido.innerHTML = "";

  contenido.style.display = "block";


  // Crear menú
  crearMenuFreeFire();
}