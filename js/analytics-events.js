/* PatronNick - eventos de Google Analytics 4
   No envía el texto escrito por el usuario ni los nombres copiados. */
(function () {
  "use strict";

  function track(eventName, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params || {});
  }

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, 80);
  }

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest("#btnGenerar")) {
      track("generate_styles");
      return;
    }

    if (target.closest("#abrirFavoritos")) {
      track("open_favorites");
      return;
    }

    const gameCard = target.closest(".game-card");
    if (gameCard) {
      const label = cleanText(gameCard.querySelector(".game-label")?.textContent || gameCard.textContent);
      track("select_game", { game: label || "unknown" });
      return;
    }

    const categoryButton = target.closest("#btnOscuro, #btnParejas, #btnPro, #btnInvisible");
    if (categoryButton) {
      const categories = {
        btnOscuro: "oscuro",
        btnParejas: "parejas",
        btnPro: "pro_player",
        btnInvisible: "invisible"
      };
      track("open_freefire_category", { category: categories[categoryButton.id] || "unknown" });
      return;
    }

    if (target.closest(".btnFavorito, .favoriteInvisible")) {
      track("favorite_click");
      return;
    }

    if (target.closest(".removeFav")) {
      track("remove_favorite");
      return;
    }

    const previewButton = target.closest(".previewNameBtn");
    if (previewButton) {
      track("preview_name", {
        category: previewButton.dataset.category || "freefire",
        mode: previewButton.dataset.pareja === "true" ? "duo" : "solo"
      });
      return;
    }

    if (target.closest(".pn-preview-copy")) {
      track("preview_copy");
      return;
    }

    if (target.closest(".pn-preview-favorite")) {
      track("preview_favorite");
      return;
    }

    const copyCard = target.closest(".tarjetaCopiable");
    if (copyCard) {
      const context = copyCard.classList.contains("resultado")
        ? "generator"
        : copyCard.classList.contains("favorite-saved-card")
          ? "favorites"
          : "freefire_category";
      track("copy_name", { context: context });
    }
  }, { passive: true });
})();
