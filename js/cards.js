function crearTarjetaResultado(item) {
  const card = document.createElement("div");
  const color = colores[Math.floor(Math.random() * colores.length)];

  card.className = "resultado tarjetaCopiable";
  card.dataset.texto = item.texto;
  card.style.borderColor = color;
  card.style.boxShadow = `0 0 15px ${color}55`;

  card.innerHTML = `
    <div class="resultado-fuente" style="color:${color};">
      👑 ${item.fuente}
    </div>

    <button class="btnFavorito" type="button">
      ${esFavorito(item.texto) ? "❤️ Favorito" : "⭐ Favorito"}
    </button>

    <div class="resultado-texto">
      ${item.texto}
    </div>

    <div class="estadisticasNombre resultado-stats">
      <span class="copiasNombre">📋 0</span>
      <span class="favoritosNombre">❤️ 0</span>
    </div>

    <span class="copiadoOverlay" aria-hidden="true"><span class="copiadoTexto">COPIADO</span></span>
  `;

  const botonFavorito = card.querySelector(".btnFavorito");
  aplicarEstadoBotonFavorito(botonFavorito, esFavorito(item.texto));

  botonFavorito.addEventListener("click", async (event) => {
    event.stopPropagation();
    dispararEfectoFavorito(botonFavorito);

    if (botonFavorito.dataset.procesando === "true") return;
    botonFavorito.dataset.procesando = "true";

    try {
      if (esFavorito(item.texto)) {
        const correcto = await decrementarFavorito(item.texto);
        if (correcto) {
          eliminarFavorito(item.texto);
          botonFavorito.textContent = "⭐ Favorito";
          aplicarEstadoBotonFavorito(botonFavorito, false);
        }
      } else {
        const correcto = await registrarFavorito(item.texto);
        if (correcto) {
          agregarFavorito(item.texto);
          botonFavorito.textContent = "❤️ Favorito";
          aplicarEstadoBotonFavorito(botonFavorito, true);
        }
      }

      actualizarContadorFavoritos();
      await actualizarEstadisticaResultado(item.texto);
    } catch (error) {
      console.error("Error al cambiar favorito:", error);
    } finally {
      botonFavorito.dataset.procesando = "false";
    }
  });

  card.addEventListener("click", async (event) => {
    if (event.target.closest(".btnFavorito")) return;

    if (card.dataset.procesando === "true") return;
    card.dataset.procesando = "true";

    try {
      const correcto = await copiarTarjetaInteractiva(card, item.texto);
      if (!correcto) return;

      const copiaRegistrada = await registrarCopia(item.texto);
      if (copiaRegistrada) {
        actualizarEstadisticaResultado(item.texto);
      }
    } catch (error) {
      console.error("Error copiando resultado:", error);
    } finally {
      card.dataset.procesando = "false";
    }
  });

  return card;
}
