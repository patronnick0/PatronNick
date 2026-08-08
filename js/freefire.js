function crearMenuFreeFire() {
  contenido.innerHTML = `
    <div class="pantallaJuego">

      <h2 class="tituloJuego">🔥 Free Fire</h2>

      <div class="menu-juego">

        <div class="modo-card">
          <h3>☠️ Oscuro</h3>
          <p>Estilo dark.</p>
          <span class="cantidad-nombres">
            ${categorias.oscuro.length} nombres
          </span>
          <button id="btnOscuro">Entrar</button>
        </div>

        <div class="modo-card">
          <h3>❤️ Parejas</h3>
          <p>Nombres para dúos.</p>
          <span class="cantidad-nombres">
            ${categorias.parejas.length} nombres
          </span>
          <button id="btnParejas">Entrar</button>
        </div>

        <div class="modo-card">
          <h3>👑 Pro Player</h3>
          <p>Nombres competitivos.</p>
          <span class="cantidad-nombres">
            ${categorias.pro.length} nombres
          </span>
          <button id="btnPro">Entrar</button>
        </div>

        <div class="modo-card">
          <h3>👻 Invisible</h3>
          <p>Crea nombres invisibles.</p>
          <span class="cantidad-nombres">
            ${categorias.invisible.length} nombres
          </span>
          <button id="btnInvisible">Entrar</button>
        </div>

      </div>

    </div>
  `;

  document.getElementById("btnOscuro").addEventListener("click", () => {
    renderCategoria("☠️ Oscuro", categorias.oscuro);
  });

  document.getElementById("btnParejas").addEventListener("click", () => {
    renderCategoria("❤️ Parejas", categorias.parejas);
  });

  document.getElementById("btnPro").addEventListener("click", () => {
    renderCategoria("👑 Pro Player", categorias.pro);
  });

  document.getElementById("btnInvisible").addEventListener("click", () => {
    renderCategoria("👻 Invisible", categorias.invisible);
  });
}


function mostrarFreeFire() {
  topBar.classList.add("show");

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

  crearMenuFreeFire();
}