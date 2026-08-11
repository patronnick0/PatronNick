function crearMenuFreeFire() {
  contenido.innerHTML = `
    <div class="pantallaJuego">

      <h2 class="tituloJuego ff-menu-title">
        <span class="ff-menu-title-icon ff-menu-title-icon--fire" aria-hidden="true">🔥</span>
        <span>Free Fire</span>
      </h2>

      <div class="menu-juego">

        <!-- OSCURO -->
        <div class="modo-card">
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img" src="assets/images/categories/dark.webp" alt="" aria-hidden="true">
            <span>Oscuro</span>
          </h3>

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
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img" src="assets/images/categories/pairs.webp" alt="" aria-hidden="true">
            <span>Parejas</span>
          </h3>

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
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img ff-mode-icon-img--pro" src="assets/images/categories/pro.webp" alt="" aria-hidden="true">
            <span>Pro Player</span>
          </h3>

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
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img" src="assets/images/categories/invisible.webp" alt="" aria-hidden="true">
            <span>Invisible</span>
          </h3>

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
      '<span class="ff-category-page-title"><img src="assets/images/categories/dark.webp" alt="" aria-hidden="true"><span>Oscuro</span></span>',
      obtenerOrdenCategoria("oscuro")
    );
  });


  // PAREJAS
  document.getElementById("btnParejas").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/pairs.webp" alt="" aria-hidden="true"><span>Parejas</span></span>',
      obtenerOrdenCategoria("parejas")
    );
  });


  // PRO PLAYER
  document.getElementById("btnPro").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/pro.webp" alt="" aria-hidden="true"><span>Pro Player</span></span>',
      obtenerOrdenCategoria("pro")
    );
  });


  // INVISIBLE
  document.getElementById("btnInvisible").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/invisible.webp" alt="" aria-hidden="true"><span>Invisible</span></span>',
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