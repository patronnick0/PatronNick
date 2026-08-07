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

function crearTarjetaResultado(item) {
  const card = document.createElement("div");
  const color = colores[Math.floor(Math.random() * colores.length)];

  card.className = "resultado";
  card.style.borderColor = color;
  card.style.boxShadow = `0 0 15px ${color}55`;

  card.innerHTML = `
        <div style="
            color:${color};
            font-size:15px;
            font-weight:bold;
            margin-bottom:10px;
        ">
            👑 ${item.fuente}
        </div>

        <div style="
            font-size:22px;
            font-weight:700;
            margin-bottom:14px;
            word-break:break-word;
        ">
            ${item.texto}
        </div>

        <button type="button" style="
            padding:10px 14px;
            border:none;
            border-radius:10px;
            background:#00b4ff;
            color:white;
            font-weight:bold;
            cursor:pointer;
        ">
            📋 Copiar
        </button>
    `;

  const botonCopiar = card.querySelector("button");

  botonCopiar.addEventListener("click", async () => {
    await navigator.clipboard.writeText(item.texto);
    botonCopiar.textContent = "✅ Copiado";

    setTimeout(() => {
      botonCopiar.textContent = "📋 Copiar";
    }, 1200);
  });

  return card;
}

function mostrarInicio() {
  topBar.classList.remove("show");
  generatorSection.style.display = "block";
  games.style.display = "grid";
  categoriasTitulo.style.display = "block";
  resultados.innerHTML = "";
  contenido.style.display = "none";
  contenido.innerHTML = "";
  inputNombre.value = inputNombre.value;
  inputNombre.focus();
}

function mostrarResultados(nombre) {
  topBar.classList.add("show");
  generatorSection.style.display = "block";
  games.style.display = "none";
  categoriasTitulo.style.display = "none";
  contenido.style.display = "none";
  contenido.innerHTML = "";
  resultados.innerHTML = "";

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
  contenido.innerHTML = `
        <div class="pantallaJuego">

            <button id="volverMenu" class="back-btn">
                ← Volver
            </button>

            <h2 class="tituloJuego">${tituloCategoria}</h2>

            <div class="listaInvisible">
                ${nombres
                  .map(
                    (nombre) => `
                            <div class="itemInvisible">
                                <span>${nombre}</span>
                                <button class="copyInvisible" data-text="${nombre}">
                                    📋 Copiar
                                </button>
                            </div>
                        `,
                  )
                  .join("")}
            </div>
        </div>
    `;

  document.querySelectorAll(".copyInvisible").forEach((boton) => {
    boton.addEventListener("click", async () => {
      await navigator.clipboard.writeText(boton.dataset.text);
      boton.textContent = "✅ Copiado";

      setTimeout(() => {
        boton.textContent = "📋 Copiar";
      }, 1200);
    });
  });

  document
    .getElementById("volverMenu")
    .addEventListener("click", crearMenuFreeFire);
}

function crearMenuFreeFire() {
  contenido.innerHTML = `
        <button id="volverInicio" class="back-btn">
            ← Volver
        </button>

        <div class="pantallaJuego">
            <h2 class="tituloJuego">🔥 Free Fire</h2>

            <div class="menu-juego">

                <div class="modo-card">
                    <h3>☠️ Oscuro</h3>
                    <p>Estilo dark.</p>
                    <button id="btnOscuro">Entrar</button>
                </div>

                <div class="modo-card">
                    <h3>❤️ Parejas</h3>
                    <p>Nombres para dúos.</p>
                    <button id="btnParejas">Entrar</button>
                </div>

                <div class="modo-card">
                    <h3>👑 Pro Player</h3>
                    <p>Nombres competitivos.</p>
                    <button id="btnPro">Entrar</button>
                </div>

                <div class="modo-card">
                    <h3>👻 Invisible</h3>
                    <p>Crea nombres invisibles.</p>
                    <button id="btnInvisible">Entrar</button>
                </div>

            </div>
        </div>
    `;

  document
    .getElementById("volverInicio")
    .addEventListener("click", mostrarInicio);

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
  generatorSection.style.display = "none";
  games.style.display = "none";
  categoriasTitulo.style.display = "none";
  resultados.innerHTML = "";
  topBar.classList.remove("show");
  contenido.style.display = "block";
  crearMenuFreeFire();
}

btnGenerar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Escribe un nombre.");
    return;
  }

  mostrarResultados(nombre);
});

inputNombre.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnGenerar.click();
  }
});

btnInicio.addEventListener("click", mostrarInicio);
freefireBtn.addEventListener("click", mostrarFreeFire);

mostrarInicio();
