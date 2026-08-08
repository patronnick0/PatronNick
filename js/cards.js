function crearTarjetaResultado(item) {
  const card = document.createElement("div");

  const color =
    colores[Math.floor(Math.random() * colores.length)];

  card.className = "resultado";
  card.style.borderColor = color;
  card.style.boxShadow = `0 0 15px ${color}55`;

  card.innerHTML = `
    <div class="resultado-fuente" style="color:${color};">
      👑 ${item.fuente}
    </div>

    <div class="resultado-texto">
      ${item.texto}
    </div>

    <div class="acciones-card">

      <button class="btnFavorito">
        ${esFavorito(item.texto) ? "❤️ Guardado" : "⭐ Favorito"}
      </button>

      <button class="btnCopiar">
        📋 Copiar
      </button>

    </div>
  `;

  const botonFavorito = card.querySelector(".btnFavorito");
  const botonCopiar = card.querySelector(".btnCopiar");

  // ⭐ FAVORITO
  botonFavorito.addEventListener("click", () => {

    if (esFavorito(item.texto)) {

      eliminarFavorito(item.texto);
      botonFavorito.textContent = "⭐ Favorito";

    } else {

      agregarFavorito(item.texto);
      botonFavorito.textContent = "❤️ Guardado";

    }

    actualizarContadorFavoritos();
  });

  // 📋 COPIAR
  renderCopiarTexto(botonCopiar, item.texto);

  return card;
}