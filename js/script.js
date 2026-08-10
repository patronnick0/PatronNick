const inputNombre = document.getElementById("inputNombre");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const topBar = document.getElementById("topBar");
const btnInicio = document.getElementById("btnInicio");
const generatorSection = document.querySelector(".generator");
const games = document.querySelector(".games");
const categoriasTitulo = document.querySelector(".categorias");
const freefireBtn = document.getElementById("freefireBtn");
const contenido = document.getElementById("contenido");
const zonaFavoritos = document.getElementById("zonaFavoritos");
const abrirFavoritos = document.getElementById("abrirFavoritos");
const panelFavoritos = document.getElementById("panelFavoritos");
const contadorFavoritos = document.getElementById("contadorFavoritos");

const colores = [
  "#38bdf8",
  "#a855f7",
  "#ef4444",
  "#22c55e",
  "#f59e0b",
  "#06b6d4",
  "#ec4899",
  "#8b5cf6",
  "#10b981",
  "#f97316",
  "#3b82f6",
  "#e11d48",
  "#14b8a6",
  "#84cc16",
  "#6366f1",
  "#f43f5e",
  "#0ea5e9",
  "#9333ea",
  "#65a30d",
  "#fb923c",
  "#0284c7",
  "#7c3aed",
  "#16a34a",
  "#dc2626",
  "#0891b2",
];

function renderCopiarTexto(boton, texto) {
  boton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(texto);

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


/* =========================================
   CREAR TARJETA
========================================= */

function crearCard(item) {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="textoResultado">
      ${item.texto}
    </div>

    <div class="acciones">
      <button class="btnFavorito">
        ${esFavorito(item.texto) ? "❤️ Guardado" : "⭐ Favorito"}
      </button>
    </div>
  `;

  const botonFavorito = card.querySelector(".btnFavorito");

  botonFavorito.addEventListener("click", () => {

    if (esFavorito(item.texto)) {
      eliminarFavorito(item.texto);
      botonFavorito.textContent = "⭐ Favorito";
    } else {
      agregarFavorito(item.texto);
      botonFavorito.textContent = "❤️ Guardado";
    }

    actualizarContadorFavoritos();

    if (panelFavoritos.style.display === "block") {
      renderFavoritos();
    }
  });

  return card;
}


/* =========================================
   GENERAR
========================================= */

btnGenerar.addEventListener("click", () => {

  const nombre = inputNombre.value.trim();

  if (!nombre) {
    alert("Escribe un nombre.");
    return;
  }

  mostrarResultados(nombre);
});


/* =========================================
   ENTER PARA GENERAR
========================================= */

inputNombre.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    btnGenerar.click();
  }

});


/* =========================================
   NAVEGACIÓN
========================================= */

btnInicio.addEventListener("click", mostrarInicio);

freefireBtn.addEventListener("click", mostrarFreeFire);

abrirFavoritos.addEventListener("click", alternarFavoritos);


/* =========================================
   INICIO
========================================= */

mostrarInicio();
actualizarContadorFavoritos();

// Empieza a preparar las estadísticas apenas carga la web, pero nunca
// bloquea la interfaz ni la entrada a una categoría.
setTimeout(() => {
  if (typeof iniciarPrecargaRankingCategorias === "function") {
    iniciarPrecargaRankingCategorias();
  }
}, 40);