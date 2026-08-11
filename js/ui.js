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


/* =========================================
   AVISO TEMPORAL: NUEVOS NOMBRES
   Visible durante 48 horas desde esta actualización.
========================================= */
const NUEVOS_NOMBRES_EXPIRA = Date.parse("2026-08-12T21:55:00Z");

function ocultarAvisoNombresNuevos() {
  const aviso = document.getElementById("newNamesNotice");
  if (aviso) aviso.style.display = "none";
}

function actualizarAvisoNombresNuevos() {
  const aviso = document.getElementById("newNamesNotice");
  if (!aviso) return;

  const sigueActivo = Date.now() < NUEVOS_NOMBRES_EXPIRA;

  // Siempre vuelve a mostrarse al entrar al inicio mientras siga activo.
  aviso.style.display = sigueActivo ? "flex" : "none";

  if (sigueActivo && !aviso._expiraTimeout) {
    const restante = Math.max(0, NUEVOS_NOMBRES_EXPIRA - Date.now());
    aviso._expiraTimeout = window.setTimeout(
      ocultarAvisoNombresNuevos,
      restante
    );
  }

  if (aviso.dataset.inicializado === "true") return;
  aviso.dataset.inicializado = "true";

  const cerrar = aviso.querySelector(".new-names-close");
  const explorar = aviso.querySelector(".new-names-action");

  cerrar?.addEventListener("click", () => {
    ocultarAvisoNombresNuevos();
  });

  explorar?.addEventListener("click", () => {
    if (typeof mostrarFreeFire === "function") {
      mostrarFreeFire();
    }
  });
}


function mostrarInicio() {

  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "flex";
  }


  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "block";
  }


  actualizarAvisoNombresNuevos();


  /*
   * IMPORTANTE:
   * Restauramos el botón de TikTok cuando volvemos al inicio.
   *
   * mostrarResultados() lo oculta temporalmente.
   */
  const tiktokBtn = document.querySelector(".tiktok-btn");

  if (tiktokBtn) {
    tiktokBtn.style.removeProperty("display");
  }


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


function obtenerClienteSupabase() {

  if (
    typeof window.supabaseClient !== "undefined" &&
    window.supabaseClient
  ) {
    return window.supabaseClient;
  }


  if (
    typeof supabaseClient !== "undefined" &&
    supabaseClient
  ) {
    return supabaseClient;
  }


  return null;
}


function aplicarEstadoBotonFavorito(boton, estaActivo) {

  if (!boton) return;

  boton.classList.toggle(
    "favorito-activo",
    Boolean(estaActivo)
  );
}


function dispararEfectoFavorito(boton) {

  if (!boton) return;


  boton.classList.remove("fav-clicked");

  void boton.offsetWidth;

  boton.classList.add("fav-clicked");


  window.clearTimeout(
    boton._favEffectTimeout
  );


  boton._favEffectTimeout = window.setTimeout(() => {

    boton.classList.remove("fav-clicked");

  }, 520);
}


function mostrarEstadoFavorito(card, agregado) {

  if (!card) return;

  let overlay = card.querySelector(".favoritoOverlay");

  if (!overlay) {
    overlay = document.createElement("span");
    overlay.className = "favoritoOverlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `<span class="favoritoOverlayIcon"></span><span class="favoritoOverlayTexto"></span>`;
    card.appendChild(overlay);
  }

  const icono = overlay.querySelector(".favoritoOverlayIcon");
  const texto = overlay.querySelector(".favoritoOverlayTexto");

  overlay.classList.remove("favorito-visible", "favorito-quitar");
  card.classList.remove("favorito-feedback");

  if (agregado) {
    if (icono) icono.textContent = "♥";
    if (texto) texto.textContent = "GUARDADO";
  } else {
    overlay.classList.add("favorito-quitar");
    if (icono) icono.textContent = "◇";
    if (texto) texto.textContent = "QUITADO";
  }

  void overlay.offsetWidth;
  overlay.classList.add("favorito-visible");
  card.classList.add("favorito-feedback");

  window.clearTimeout(card._favoritoFeedbackTimeout);
  card._favoritoFeedbackTimeout = window.setTimeout(() => {
    overlay.classList.remove("favorito-visible", "favorito-quitar");
    card.classList.remove("favorito-feedback");
  }, 1450);
}


function mostrarEstadoCopiado(card) {

  if (!card) return;


  const overlay = card.querySelector(".copiadoOverlay");

  const texto = overlay?.querySelector(".copiadoTexto");


  if (!overlay || !texto) return;


  window.clearTimeout(
    card._copiadoTimeout
  );


  card.classList.remove("copiado-activo");

  overlay.classList.remove("copiado-visible");

  texto.classList.remove("copiado-texto-activo");


  void card.offsetWidth;

  void overlay.offsetWidth;

  void texto.offsetWidth;


  card.classList.add("copiado-activo");

  overlay.classList.add("copiado-visible");

  texto.classList.add("copiado-texto-activo");


  card._copiadoTimeout = window.setTimeout(() => {

    texto.classList.remove("copiado-texto-activo");

    overlay.classList.remove("copiado-visible");

    card.classList.remove("copiado-activo");

  }, 3000);
}


async function copiarTarjetaInteractiva(card, texto) {

  const textoOriginal = String(texto ?? "");


  if (!textoOriginal.length) {
    return false;
  }


  try {

    await navigator.clipboard.writeText(
      textoOriginal
    );


    mostrarEstadoCopiado(card);


    return true;

  } catch (error) {

    console.error(
      "Error copiando texto:",
      error
    );


    return false;
  }
}


async function obtenerEstadisticas(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {

    console.error(
      "Supabase no está disponible."
    );


    return {
      copias: 0,
      favoritos: 0
    };
  }


  const { data, error } = await client
    .from("estadisticas_nombres")
    .select("copias, favoritos")
    .eq("nombre", nombre)
    .maybeSingle();


  if (error) {

    console.error(
      "Error obteniendo estadísticas:",
      error
    );


    return {
      copias: 0,
      favoritos: 0
    };
  }


  return data || {
    copias: 0,
    favoritos: 0
  };
}


async function registrarCopia(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {
    return false;
  }


  const { error } = await client.rpc(
    "incrementar_copias",
    {
      p_nombre: nombre
    }
  );


  if (error) {

    console.error(
      "Error registrando copia:",
      error
    );


    return false;
  }


  return true;
}


async function registrarFavorito(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {

    console.error(
      "Supabase no está disponible."
    );


    return false;
  }


  const { error } = await client.rpc(
    "incrementar_favoritos",
    {
      p_nombre: nombre
    }
  );


  if (error) {

    console.error(
      "Error registrando favorito:",
      error
    );


    return false;
  }


  return true;
}


async function decrementarFavorito(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {

    console.error(
      "Supabase no está disponible."
    );


    return false;
  }


  const { error } = await client.rpc(
    "decrementar_favoritos",
    {
      p_nombre: nombre
    }
  );


  if (error) {

    console.error(
      "Error restando favorito:",
      error
    );


    return false;
  }


  return true;
}


function obtenerElementoCategoriaPorNombre(nombre) {

  if (
    typeof contenido === "undefined" ||
    !contenido
  ) {
    return null;
  }


  return [
    ...contenido.querySelectorAll(
      ".tarjetaCategoria"
    )
  ].find(
    (item) =>
      item.dataset.nombre === nombre
  );
}


function obtenerElementoResultadoPorNombre(nombre) {

  if (
    typeof resultados === "undefined" ||
    !resultados
  ) {
    return null;
  }


  return [
    ...resultados.querySelectorAll(
      ".resultado"
    )
  ].find(
    (item) =>
      item.dataset.texto === nombre
  );
}


async function actualizarEstadisticaNombre(nombre) {

  const item =
    obtenerElementoCategoriaPorNombre(nombre);


  if (!item) return;


  const estadisticas =
    await obtenerEstadisticas(nombre);


  const copias =
    item.querySelector(".copiasNombre");


  const favoritos =
    item.querySelector(".favoritosNombre");


  if (copias) {
    copias.textContent =
      `📋 ${estadisticas.copias}`;
  }


  if (favoritos) {
    favoritos.textContent =
      `❤️ ${estadisticas.favoritos}`;
  }


  if (
    typeof actualizarCacheEstadisticasNombre ===
    "function"
  ) {

    actualizarCacheEstadisticasNombre(
      nombre,
      estadisticas
    );
  }
}


async function actualizarEstadisticaResultado(nombre) {

  const item =
    obtenerElementoResultadoPorNombre(nombre);


  if (!item) return;


  const estadisticas =
    await obtenerEstadisticas(nombre);


  const copias =
    item.querySelector(".copiasNombre");


  const favoritos =
    item.querySelector(".favoritosNombre");


  if (copias) {
    copias.textContent =
      `📋 ${estadisticas.copias}`;
  }


  if (favoritos) {
    favoritos.textContent =
      `❤️ ${estadisticas.favoritos}`;
  }

  if (
    typeof actualizarCacheEstadisticasNombre ===
    "function"
  ) {
    actualizarCacheEstadisticasNombre(
      nombre,
      estadisticas
    );
  }
}



function escaparHtml(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function separarNombrePareja(nombre) {
  const texto = String(nombre ?? "").trim();

  if (!texto) return [];

  // Formato recomendado para nombres nuevos: "Duo || Dua".
  let partes = texto.split(/\s*\|\|\s*/).filter(Boolean);

  // Compatibilidad con los nombres antiguos que fueron separados con muchos espacios.
  if (partes.length < 2) {
    partes = texto.split(/ {3,}/).map((parte) => parte.trim()).filter(Boolean);
  }

  if (partes.length < 2) return [texto];

  return [partes[0], partes.slice(1).join(" ")];
}

function obtenerTextoCopiaPareja(nombre) {
  const partes = separarNombrePareja(nombre);
  return partes.length > 1 ? partes.join("\n") : String(nombre ?? "").trim();
}



/* =========================================================
   PN NICK PREVIEW — VISTA DE PERFIL PARA CATEGORÍAS FREE FIRE
   ========================================================= */
const PN_PREVIEW_UID = "8265081210";
const PN_PREVIEW_LEVEL = 100;

function obtenerClaveCategoriaPreview(tituloCategoria) {
  const titulo = String(tituloCategoria ?? "").toLowerCase();

  if (titulo.includes("pareja")) return "parejas";
  if (titulo.includes("oscuro")) return "oscuro";
  if (titulo.includes("pro player")) return "pro_player";
  if (titulo.includes("invisible")) return "invisible";

  return "freefire";
}

function obtenerEtiquetaCategoriaPreview(clave) {
  const etiquetas = {
    oscuro: "OSCURO",
    parejas: "PAREJAS",
    pro_player: "PRO PLAYER",
    invisible: "INVISIBLE"
  };

  return etiquetas[clave] || "FREE FIRE";
}

function obtenerModalPreviewNombre() {
  let modal = document.getElementById("pnNickPreview");

  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "pnNickPreview";
  modal.className = "pn-preview";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="pn-preview-backdrop" data-pn-preview-close></div>

    <section
      class="pn-preview-shell pn-ff-shell"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pnPreviewTitle"
    >
      <button
        class="pn-preview-close"
        type="button"
        data-pn-preview-close
        aria-label="Cerrar vista previa"
      >×</button>

      <div class="pn-preview-scanline" aria-hidden="true"></div>

      <header class="pn-preview-header pn-ff-preview-header">
        <div class="pn-preview-brand">
          <span class="pn-preview-brand-dot"></span>
          <div>
            <strong id="pnPreviewTitle">PN // FREE FIRE PREVIEW</strong>
            <span>PRUEBA TU NICK ANTES DE COPIARLO</span>
          </div>
        </div>
        <span id="pnPreviewCategory" class="pn-preview-category">FREE FIRE</span>
      </header>

      <div class="pn-profile-board pn-ff-board">
        <div class="pn-ff-topbar">
          <div class="pn-ff-wordmark" aria-label="Free Fire">FREE F<span>1</span>RE</div>
          <div class="pn-ff-top-decoration" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>
        </div>

        <div class="pn-ff-identity">
          <div class="pn-ff-avatar-zone">
            <div class="pn-ff-avatar-frame">
              <img class="pn-ff-avatar" src="assets/images/profile/pn-avatar.webp" alt="Avatar de perfil">
            </div>
            <span class="pn-ff-level">Nvl. ${PN_PREVIEW_LEVEL}</span>
          </div>

          <div class="pn-ff-name-zone">
            <div id="pnPreviewNames" class="pn-preview-names pn-ff-names"></div>
            <div class="pn-ff-mini-icons" aria-hidden="true">
              <span>▦</span>
              <span>◷</span>
              <span>◉</span>
            </div>
          </div>

          <div class="pn-ff-likes">
            <span class="pn-ff-like-icon">♥</span>
            <strong>9999</strong>
          </div>
        </div>

        <div class="pn-ff-idbar">
          <span>UID:</span>
          <strong>${PN_PREVIEW_UID}</strong>
          <span class="pn-ff-id-copy" aria-hidden="true">▤</span>
        </div>

        <div class="pn-ff-battle-title">
          <span>⇆</span>
          <strong>BATTLE ROYALE</strong>
        </div>

        <div class="pn-ff-battle-grid">
          <div class="pn-ff-stat pn-ff-stat-rank">
            <div class="pn-ff-badge-glow"></div>
            <img src="assets/images/profile/rank.webp" alt="Rango Battle Royale">
          </div>

          <div class="pn-ff-stat">
            <div class="pn-ff-badge-glow pn-ff-badge-glow-purple"></div>
            <img src="assets/images/profile/emblem.webp" alt="Emblema">
          </div>

          <div class="pn-ff-stat">
            <div class="pn-ff-badge-glow pn-ff-badge-glow-red"></div>
            <img src="assets/images/profile/runner.webp" alt="Corredor">
          </div>
        </div>

        <div class="pn-ff-bio">Amo Free Fire</div>
      </div>

      <div class="pn-preview-actions pn-ff-preview-actions">
        <button class="pn-preview-action pn-preview-copy" type="button">
          <span>▣</span>
          Copiar nick
        </button>

        <button class="pn-preview-action pn-preview-favorite" type="button">
          <span>♥</span>
          Guardar
        </button>
      </div>
    </section>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll("[data-pn-preview-close]").forEach((elemento) => {
    elemento.addEventListener("click", cerrarPreviewNombre);
  });

  modal.querySelector(".pn-preview-copy")?.addEventListener("click", async () => {
    const texto = modal.dataset.copyText || "";
    if (!texto) return;

    try {
      await navigator.clipboard.writeText(texto);
      const boton = modal.querySelector(".pn-preview-copy");
      if (!boton) return;

      boton.classList.add("is-success");
      boton.innerHTML = "<span>✓</span> COPIADO";

      window.clearTimeout(boton._pnPreviewCopyTimeout);
      boton._pnPreviewCopyTimeout = window.setTimeout(() => {
        boton.classList.remove("is-success");
        boton.innerHTML = "<span>▣</span> Copiar nick";
      }, 1400);
    } catch (error) {
      console.error("Error copiando desde la vista previa:", error);
    }
  });

  modal.querySelector(".pn-preview-favorite")?.addEventListener("click", async () => {
    const nombre = modal.dataset.nombreOriginal || "";
    if (!nombre) return;

    const boton = modal.querySelector(".pn-preview-favorite");
    if (!boton || boton.dataset.procesando === "true") return;

    boton.dataset.procesando = "true";

    try {
      const estabaGuardado = esFavorito(nombre);
      let correcto = false;

      if (estabaGuardado) {
        correcto = await decrementarFavorito(nombre);
        if (correcto) eliminarFavorito(nombre);
      } else {
        correcto = await registrarFavorito(nombre);
        if (correcto) agregarFavorito(nombre);
      }

      if (!correcto) return;

      actualizarContadorFavoritos();
      actualizarEstadoFavoritoPreview(nombre);

      const tarjeta = Array.from(document.querySelectorAll("#contenido .tarjetaCategoria"))
        .find((item) => item.dataset.nombre === nombre);

      const botonTarjeta = tarjeta?.querySelector(".favoriteInvisible");
      const guardadoAhora = esFavorito(nombre);

      if (botonTarjeta) {
        botonTarjeta.textContent = guardadoAhora ? "❤️ Guardado" : "⭐ Favorito";
        aplicarEstadoBotonFavorito(botonTarjeta, guardadoAhora);
      }

      if (tarjeta) mostrarEstadoFavorito(tarjeta, guardadoAhora);

      if (typeof actualizarEstadisticaNombre === "function") {
        actualizarEstadisticaNombre(nombre);
      }
    } catch (error) {
      console.error("Error actualizando favorito desde vista previa:", error);
    } finally {
      boton.dataset.procesando = "false";
    }
  });

  if (!window._pnPreviewEscapeActivo) {
    window._pnPreviewEscapeActivo = true;
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") cerrarPreviewNombre();
    });
  }

  return modal;
}

function actualizarEstadoFavoritoPreview(nombre) {
  const modal = document.getElementById("pnNickPreview");
  if (!modal) return;

  const boton = modal.querySelector(".pn-preview-favorite");
  if (!boton) return;

  const guardado = esFavorito(nombre);
  boton.classList.toggle("is-saved", guardado);
  boton.innerHTML = guardado
    ? "<span>♥</span> Guardado"
    : "<span>♥</span> Guardar";
}

function cerrarPreviewNombre() {
  const modal = document.getElementById("pnNickPreview");
  if (!modal || !modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("pn-preview-open");
}

function abrirPreviewNombre(nombre, opciones = {}) {
  const modal = obtenerModalPreviewNombre();
  const esPareja = Boolean(opciones.esPareja);
  const categoria = opciones.categoria || "freefire";
  const partes = esPareja ? separarNombrePareja(nombre) : [String(nombre ?? "")];
  const nombres = partes.length > 1 ? partes : [String(nombre ?? "")];
  const contenedorNombres = modal.querySelector("#pnPreviewNames");
  const categoriaElemento = modal.querySelector("#pnPreviewCategory");

  modal.dataset.nombreOriginal = String(nombre ?? "");
  modal.dataset.copyText = esPareja
    ? obtenerTextoCopiaPareja(nombre)
    : String(nombre ?? "");
  modal.dataset.category = categoria;
  modal.dataset.mode = esPareja && nombres.length > 1 ? "duo" : "solo";

  if (categoriaElemento) {
    categoriaElemento.textContent = obtenerEtiquetaCategoriaPreview(categoria);
  }

  if (contenedorNombres) {
    contenedorNombres.classList.toggle("is-duo", esPareja && nombres.length > 1);

    contenedorNombres.innerHTML = nombres
      .map((nick, index) => `
        <div class="pn-ff-player ${index === 1 ? "pn-ff-player-alt" : ""}">
          ${esPareja && nombres.length > 1 ? `<small>DÚO ${index + 1}</small>` : ""}
          <strong class="pn-preview-nick pn-ff-nick">${escaparHtml(nick)}</strong>
        </div>
      `)
      .join("");
  }

  actualizarEstadoFavoritoPreview(nombre);

  modal.classList.remove("is-open");
  void modal.offsetWidth;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("pn-preview-open");
}

function crearTarjetaCategoria(nombre, opciones = {}) {

  const esPareja = Boolean(opciones.esPareja);
  const categoriaPreview = opciones.categoria || "freefire";
  const partesPareja = esPareja ? separarNombrePareja(nombre) : [];

  const nombreVisual = esPareja && partesPareja.length > 1
    ? partesPareja
        .map((parte) => `<span class="pareja-linea">${escaparHtml(parte)}</span>`)
        .join("")
    : escaparHtml(nombre);

  const nombreAtributo = escaparHtml(nombre);

  return `
    <div
      class="itemInvisible tarjetaCategoria tarjetaCopiable has-preview ${esPareja ? "pareja-card" : ""}"
      data-nombre="${nombreAtributo}"
    >

      <button
        class="favoriteInvisible"
        data-text="${nombreAtributo}"
        type="button"
      >
        ${esFavorito(nombre) ? "❤️ Guardado" : "⭐ Favorito"}
      </button>

      <div class="nombreCategoria ${esPareja ? "pareja-nombre" : ""}">
        ${nombreVisual}
      </div>

      <div class="estadisticasNombre">

        <span class="copiasNombre">
          📋 0
        </span>

        <span class="favoritosNombre">
          ❤️ 0
        </span>

      </div>

      <button
        class="previewNameBtn"
        type="button"
        data-text="${nombreAtributo}"
        data-category="${escaparHtml(categoriaPreview)}"
        data-pareja="${esPareja ? "true" : "false"}"
        aria-label="Probar este nombre en la vista previa"
      >
        <span class="previewNameBtnIcon" aria-hidden="true">🎮</span>
        <span>Probar</span>
      </button>

      <span
        class="copiadoOverlay"
        aria-hidden="true"
      >
        <span class="copiadoTexto">
          COPIADO
        </span>
      </span>

    </div>
  `;
}


function renderCopiarTexto(boton, texto) {

  boton.addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard.writeText(
          String(texto ?? "")
        );


        boton.textContent =
          "✅ Copiado";


        setTimeout(() => {

          boton.textContent =
            "📋 Copiar";

        }, 1200);

      } catch (error) {

        console.error(
          "Error al copiar:",
          error
        );


        boton.textContent =
          "❌ Error";


        setTimeout(() => {

          boton.textContent =
            "📋 Copiar";

        }, 1200);
      }
    }
  );
}


async function mostrarResultados(nombre) {

  const siteFooter =
    document.getElementById("siteFooter");


  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  const infoHome =
    document.getElementById("infoHome");


  if (infoHome) {
    infoHome.style.display = "none";
  }


  ocultarAvisoNombresNuevos();


  topBar.classList.add("show");


  generatorSection.style.display =
    "block";

  games.style.display =
    "none";

  categoriasTitulo.style.display =
    "none";


  /*
   * Ocultamos TikTok mientras se
   * muestran resultados.
   */
  const tiktokBtn =
    document.querySelector(".tiktok-btn");


  if (tiktokBtn) {
    tiktokBtn.style.display = "none";
  }


  ocultarZonaFavoritos();

  limpiarContenido();

  limpiarResultados();


  const titulo =
    document.createElement("p");


  titulo.style.color =
    "#cbd5e1";

  titulo.style.marginBottom =
    "14px";

  titulo.style.fontSize =
    "18px";

  titulo.textContent =
    `Resultados para: ${nombre}`;


  resultados.appendChild(titulo);


  const estilosGenerados =
    generarEstilos(nombre);


  const estilos =
    typeof obtenerOrdenResultados === "function"
      ? obtenerOrdenResultados(estilosGenerados)
      : estilosGenerados;


  if (!estilos.length) {

    const vacio =
      document.createElement("p");


    vacio.style.color =
      "#cbd5e1";


    vacio.textContent =
      "No se generaron resultados.";


    resultados.appendChild(vacio);


    return;
  }


  estilos.forEach(
    (item, index) => {

      const card =
        crearTarjetaResultado(item);


      card.style.animationDelay =
        `${index * 0.04}s`;


      resultados.appendChild(card);
    }
  );


  if (
    typeof actualizarEstadisticasResultadosEnSegundoPlano ===
    "function"
  ) {
    actualizarEstadisticasResultadosEnSegundoPlano(estilos);
  } else {
    estilos.forEach((item) =>
      actualizarEstadisticaResultado(item.texto)
    );
  }
}


function renderCategoria(tituloCategoria, nombres) {

  const categoriaPreview = obtenerClaveCategoriaPreview(tituloCategoria);
  const esCategoriaParejas = /parejas/i.test(String(tituloCategoria ?? ""));
  const nombresVisibles = esCategoriaParejas
    ? nombres.filter((nombre) => String(nombre ?? "").trim())
    : nombres;

  ocultarAvisoNombresNuevos();

  topBar.classList.remove("show");


  ocultarPanelFavoritos();

  limpiarResultados();


  contenido.style.display =
    "block";


  const infoHome =
    document.getElementById("infoHome");


  if (infoHome) {
    infoHome.style.display = "none";
  }


  const siteFooter =
    document.getElementById("siteFooter");


  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  contenido.innerHTML = `
    <div class="pantallaJuego">

      <button
        id="volverMenu"
        class="back-btn"
      >
        ← Volver
      </button>

      <h2 class="tituloJuego">
        ${tituloCategoria}
      </h2>

      <div class="listaInvisible">
        ${nombresVisibles
          .map(
            (nombre) =>
              crearTarjetaCategoria(nombre, { esPareja: esCategoriaParejas, categoria: categoriaPreview })
          )
          .join("")}
      </div>

    </div>
  `;


  contenido
    .querySelectorAll(".tarjetaCategoria")
    .forEach((tarjeta) => {

      const nombre =
        tarjeta.dataset.nombre;


      tarjeta.addEventListener(
        "click",
        async (event) => {

          if (
            event.target.closest(
              ".favoriteInvisible, .previewNameBtn"
            )
          ) {
            return;
          }


          if (
            tarjeta.dataset.procesando ===
            "true"
          ) {
            return;
          }


          tarjeta.dataset.procesando =
            "true";


          try {

            const textoParaCopiar = esCategoriaParejas
              ? obtenerTextoCopiaPareja(nombre)
              : nombre;

            const correcto =
              await copiarTarjetaInteractiva(
                tarjeta,
                textoParaCopiar
              );


            if (!correcto) return;


            const copiaRegistrada =
              await registrarCopia(nombre);


            if (copiaRegistrada) {

              actualizarEstadisticaNombre(
                nombre
              );
            }

          } catch (error) {

            console.error(
              "Error copiando nombre de categoría:",
              error
            );

          } finally {

            tarjeta.dataset.procesando =
              "false";
          }
        }
      );
    });


  contenido
    .querySelectorAll(".previewNameBtn")
    .forEach((boton) => {

      boton.addEventListener("click", (event) => {
        event.stopPropagation();

        const tarjeta = boton.closest(".tarjetaCategoria");
        const nombre = tarjeta?.dataset.nombre || boton.dataset.text || "";
        const categoria = boton.dataset.category || categoriaPreview;
        const esPareja = boton.dataset.pareja === "true";

        abrirPreviewNombre(nombre, {
          categoria,
          esPareja
        });
      });
    });


  contenido
    .querySelectorAll(".favoriteInvisible")
    .forEach((boton) => {

      const nombre =
        boton.dataset.text;


      aplicarEstadoBotonFavorito(
        boton,
        esFavorito(nombre)
      );


      boton.addEventListener(
        "click",
        async (event) => {

          event.stopPropagation();


          dispararEfectoFavorito(
            boton
          );


          if (
            boton.dataset.procesando ===
            "true"
          ) {
            return;
          }


          boton.dataset.procesando =
            "true";


          try {

            if (esFavorito(nombre)) {

              const correcto =
                await decrementarFavorito(
                  nombre
                );


              if (correcto) {

                eliminarFavorito(nombre);


                boton.textContent =
                  "⭐ Favorito";


                aplicarEstadoBotonFavorito(
                  boton,
                  false
                );

                mostrarEstadoFavorito(
                  boton.closest(".tarjetaCategoria"),
                  false
                );
              }

            } else {

              const correcto =
                await registrarFavorito(
                  nombre
                );


              if (correcto) {

                agregarFavorito(nombre);


                boton.textContent =
                  "❤️ Guardado";


                aplicarEstadoBotonFavorito(
                  boton,
                  true
                );

                mostrarEstadoFavorito(
                  boton.closest(".tarjetaCategoria"),
                  true
                );
              }
            }


            actualizarContadorFavoritos();


            await actualizarEstadisticaNombre(
              nombre
            );

          } catch (error) {

            console.error(
              "Error procesando favorito:",
              error
            );

          } finally {

            boton.dataset.procesando =
              "false";
          }
        }
      );
    });


  /*
   * No bloqueamos la entrada esperando red.
   * Las estadísticas en caché se muestran
   * inmediatamente y se actualizan después.
   */
  if (
    typeof actualizarEstadisticasCategoriaEnSegundoPlano ===
    "function"
  ) {

    actualizarEstadisticasCategoriaEnSegundoPlano(
      nombres
    );

  } else {

    nombres.forEach(
      (nombre) =>
        actualizarEstadisticaNombre(nombre)
    );
  }


  const botonVolver =
    document.getElementById("volverMenu");


  if (botonVolver) {

    botonVolver.addEventListener(
      "click",
      mostrarFreeFire
    );
  }
}


function renderFavoritos() {

  ocultarAvisoNombresNuevos();

  abrirFavoritos.style.display =
    "none";


  const guardados =
    obtenerFavoritos();


  const siteFooter =
    document.getElementById("siteFooter");


  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  topBar.classList.add("show");


  const infoHome =
    document.getElementById("infoHome");


  if (infoHome) {
    infoHome.style.display = "none";
  }


  document.getElementById("hero").style.display =
    "none";

  document.getElementById("generator").style.display =
    "none";

  document.getElementById("games").style.display =
    "none";

  document.getElementById("categorias").style.display =
    "none";


  document.getElementById("contenido").style.display =
    "none";

  document.getElementById("contenido").innerHTML =
    "";

  document.getElementById("resultados").innerHTML =
    "";


  mostrarZonaFavoritos();


  if (!guardados.length) {

    panelFavoritos.innerHTML = `
      <div class="pantallaJuego favoritos-screen">
        <div class="favoritos-heading">
          <span class="favoritos-heading-icon">☆</span>
          <div>
            <h2 class="tituloJuego">Favoritos</h2>
            <p>Guarda tus mejores nicks y vuelve a copiarlos cuando quieras.</p>
          </div>
        </div>

        <div class="favorites-empty">
          <span class="favorites-empty-icon">♡</span>
          <strong>Aún no has guardado nombres</strong>
          <span>Marca una tarjeta con Favorito y aparecerá aquí.</span>
        </div>
      </div>
    `;

    panelFavoritos.style.display =
      "block";

    return;
  }


  panelFavoritos.innerHTML = `
    <div class="pantallaJuego favoritos-screen">

      <div class="favoritos-heading">
        <span class="favoritos-heading-icon">★</span>
        <div>
          <h2 class="tituloJuego">Favoritos</h2>
          <p>${guardados.length} ${guardados.length === 1 ? "nick guardado" : "nicks guardados"}</p>
        </div>
      </div>

      <div class="listaInvisible favoritos-lista">

        ${guardados
          .map((nombre) => {
            const partes = separarNombrePareja(nombre);
            const visual = partes.length > 1
              ? partes.map((parte) => `<span class="favorito-nombre-linea">${escaparHtml(parte)}</span>`).join("")
              : `<span class="favorito-nombre-linea">${escaparHtml(nombre)}</span>`;

            return `
              <div
                class="itemInvisible favorite-saved-card tarjetaCopiable"
                data-text="${escaparHtml(nombre)}"
                role="button"
                tabindex="0"
                aria-label="Copiar ${escaparHtml(nombre)}"
              >
                <div class="favorito-nombre">${visual}</div>


                <button
                  class="removeFav"
                  data-text="${escaparHtml(nombre)}"
                  type="button"
                  title="Quitar de favoritos"
                  aria-label="Quitar de favoritos"
                ></button>

                <span class="copiadoOverlay" aria-hidden="true">
                  <span class="copiadoTexto">COPIADO</span>
                </span>
              </div>
            `;
          })
          .join("")}

      </div>

    </div>
  `;


  panelFavoritos.style.display =
    "block";


  const copiarFavorito = async (tarjeta) => {
    if (!tarjeta || tarjeta.dataset.procesando === "true") return;

    const nombre = tarjeta.dataset.text || "";
    const textoParaCopiar = obtenerTextoCopiaPareja(nombre);

    tarjeta.dataset.procesando = "true";

    try {
      const correcto = await copiarTarjetaInteractiva(
        tarjeta,
        textoParaCopiar
      );

      if (!correcto) return;

      const copiaRegistrada = await registrarCopia(nombre);

      if (copiaRegistrada && typeof actualizarCacheEstadisticasNombre === "function") {
        const stats = await obtenerEstadisticas(nombre);
        actualizarCacheEstadisticasNombre(nombre, stats);
      }
    } catch (error) {
      console.error("Error copiando favorito:", error);
    } finally {
      tarjeta.dataset.procesando = "false";
    }
  };


  panelFavoritos
    .querySelectorAll(".favorite-saved-card")
    .forEach((tarjeta) => {
      tarjeta.addEventListener("click", (event) => {
        if (event.target.closest(".removeFav")) return;
        copiarFavorito(tarjeta);
      });

      tarjeta.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (event.target.closest(".removeFav")) return;
        event.preventDefault();
        copiarFavorito(tarjeta);
      });
    });


  panelFavoritos
    .querySelectorAll(".removeFav")
    .forEach((boton) => {

      boton.addEventListener(
        "click",
        async (event) => {

          event.stopPropagation();

          if (boton.dataset.procesando === "true") return;
          boton.dataset.procesando = "true";

          const nombre =
            boton.dataset.text;

          const tarjeta = boton.closest(".favorite-saved-card");

          try {
            const correcto =
              await decrementarFavorito(
                nombre
              );

            if (!correcto) return;

            eliminarFavorito(nombre);
            actualizarContadorFavoritos();

            if (tarjeta) {
              tarjeta.classList.add("favorito-removing");
              window.setTimeout(renderFavoritos, 330);
            } else {
              renderFavoritos();
            }
          } finally {
            boton.dataset.procesando = "false";
          }
        }
      );
    });
}


function alternarFavoritos() {

  if (
    panelFavoritos.style.display ===
    "block"
  ) {

    ocultarPanelFavoritos();

    return;
  }


  renderFavoritos();
}