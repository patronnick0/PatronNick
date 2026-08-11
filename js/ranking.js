/* =========================================================
   RANKING INTELIGENTE DE CATEGORÍAS
   ---------------------------------------------------------
   Objetivos:
   - Nunca bloquear la navegación esperando a Supabase.
   - Dar más probabilidad a nombres con interacción.
   - Mantener oportunidades reales para nombres nuevos (0/0).
   - Evitar que siempre se repitan los mismos primeros puestos.
   - Precargar estadísticas en segundo plano y conservar una
     caché local para que la próxima visita sea instantánea.
   ========================================================= */

const PN_RANKING_CACHE_KEY = "patronnick_categoria_stats_v2";
const PN_RANKING_HISTORY_KEY = "patronnick_categoria_history_v2";

const estadoRankingCategorias = {
  estadisticas: new Map(),
  precargaPromesa: null,
  precargaCompleta: false,
};

function normalizarNumeroRanking(valor) {
  const numero = Number(valor);
  return Number.isFinite(numero) && numero > 0 ? numero : 0;
}

function cargarCacheRankingLocal() {
  try {
    const guardado = JSON.parse(localStorage.getItem(PN_RANKING_CACHE_KEY) || "{}");
    const datos = guardado && typeof guardado === "object" ? guardado.datos : null;

    if (!datos || typeof datos !== "object") return;

    Object.entries(datos).forEach(([nombre, stats]) => {
      estadoRankingCategorias.estadisticas.set(nombre, {
        copias: normalizarNumeroRanking(stats?.copias),
        favoritos: normalizarNumeroRanking(stats?.favoritos),
      });
    });
  } catch (error) {
    console.warn("No se pudo leer la caché del ranking:", error);
  }
}

function guardarCacheRankingLocal() {
  try {
    const datos = {};

    estadoRankingCategorias.estadisticas.forEach((stats, nombre) => {
      datos[nombre] = {
        copias: normalizarNumeroRanking(stats.copias),
        favoritos: normalizarNumeroRanking(stats.favoritos),
      };
    });

    localStorage.setItem(
      PN_RANKING_CACHE_KEY,
      JSON.stringify({ actualizado: Date.now(), datos })
    );
  } catch (error) {
    // La app debe seguir funcionando aunque localStorage esté desactivado.
    console.warn("No se pudo guardar la caché del ranking:", error);
  }
}

function actualizarCacheEstadisticasNombre(nombre, estadisticas) {
  if (typeof nombre !== "string") return;

  estadoRankingCategorias.estadisticas.set(nombre, {
    copias: normalizarNumeroRanking(estadisticas?.copias),
    favoritos: normalizarNumeroRanking(estadisticas?.favoritos),
  });

  guardarCacheRankingLocal();
}

function obtenerEstadisticasRanking(nombre) {
  return estadoRankingCategorias.estadisticas.get(nombre) || {
    copias: 0,
    favoritos: 0,
  };
}

function obtenerHistorialRanking() {
  try {
    const historial = JSON.parse(localStorage.getItem(PN_RANKING_HISTORY_KEY) || "{}");
    return historial && typeof historial === "object" ? historial : {};
  } catch (error) {
    return {};
  }
}

function guardarHistorialRanking(historial) {
  try {
    localStorage.setItem(PN_RANKING_HISTORY_KEY, JSON.stringify(historial));
  } catch (error) {
    // No es crítico para el funcionamiento del ranking.
  }
}

function factorPenalizacionReciente(nombre, claveCategoria, historial) {
  const historialActual = historial || obtenerHistorialRanking();
  const rondas = Array.isArray(historialActual[claveCategoria])
    ? historialActual[claveCategoria]
    : [];

  let factor = 1;

  rondas.slice(0, 3).forEach((ronda, antiguedad) => {
    if (!Array.isArray(ronda)) return;

    const posicion = ronda.indexOf(nombre);
    if (posicion === -1) return;

    // La última ronda pesa más. Sólo penalizamos los primeros puestos.
    const porPosicion = posicion === 0 ? 0.58 : posicion === 1 ? 0.76 : 0.9;
    const porAntiguedad = antiguedad === 0 ? 1 : antiguedad === 1 ? 0.9 : 0.96;

    factor *= porPosicion * porAntiguedad;
  });

  // Nunca enterramos completamente un nombre popular.
  return Math.max(0.5, factor);
}

function registrarOrdenReciente(claveCategoria, orden) {
  if (!claveCategoria || !Array.isArray(orden)) return;

  const historial = obtenerHistorialRanking();
  const rondas = Array.isArray(historial[claveCategoria])
    ? historial[claveCategoria]
    : [];

  // Guardamos sólo los tres primeros de las últimas cuatro aperturas.
  rondas.unshift(orden.slice(0, 3));
  historial[claveCategoria] = rondas.slice(0, 4);
  guardarHistorialRanking(historial);
}

function calcularPesoRanking(nombre, claveCategoria, historial) {
  const { copias, favoritos } = obtenerEstadisticasRanking(nombre);

  // Escala logarítmica: 1.000 copias ayudan, pero no hacen invencible al nombre.
  // Los favoritos pesan más porque expresan una intención más fuerte.
  const popularidad =
    Math.log1p(copias) * 0.62 +
    Math.log1p(favoritos * 8) * 1.05;

  let peso = 1 + Math.min(3.15, popularidad * 0.42);

  // Exploración: los nombres nuevos tienen un pequeño empujón para poder
  // aparecer incluso en el puesto 1 o 2 y obtener sus primeras interacciones.
  if (copias === 0 && favoritos === 0) {
    peso *= 1.42;
  } else if (copias + favoritos <= 3) {
    peso *= 1.16;
  }

  // Evita que el mismo nombre domine las primeras posiciones cada entrada.
  peso *= factorPenalizacionReciente(nombre, claveCategoria, historial);

  // "Temperatura" que aplana diferencias: mantiene la ventaja de los populares
  // sin convertir el ranking en un orden fijo.
  return Math.max(0.65, Math.pow(peso, 0.78));
}

function ordenarConSorteoPonderado(nombres, claveCategoria) {
  const candidatos = Array.from(nombres || []);
  const historial = obtenerHistorialRanking();

  return candidatos
    .map((nombre, indiceOriginal) => {
      const peso = calcularPesoRanking(nombre, claveCategoria, historial);
      const aleatorio = Math.max(Math.random(), 1e-10);

      // Sorteo ponderado sin reemplazo (Efraimidis-Spirakis).
      // Menor clave => mayor prioridad.
      const clave = -Math.log(aleatorio) / peso;

      return { nombre, clave, indiceOriginal };
    })
    .sort((a, b) => a.clave - b.clave || a.indiceOriginal - b.indiceOriginal)
    .map((item) => item.nombre);
}

function obtenerOrdenCategoria(claveCategoria) {
  const nombres = categorias?.[claveCategoria];
  if (!Array.isArray(nombres)) return [];

  const orden = ordenarConSorteoPonderado(nombres, claveCategoria);
  registrarOrdenReciente(claveCategoria, orden);
  return orden;
}


function obtenerOrdenResultados(estilos) {
  if (!Array.isArray(estilos)) return [];

  const validos = estilos.filter(
    (item) => item && typeof item.texto === "string" && item.texto.length
  );

  const porTexto = new Map(validos.map((item) => [item.texto, item]));
  const orden = ordenarConSorteoPonderado(
    validos.map((item) => item.texto),
    "generador"
  );

  registrarOrdenReciente("generador", orden);

  return orden
    .map((texto) => porTexto.get(texto))
    .filter(Boolean);
}

function obtenerTodosLosNombresCategorias() {
  if (typeof categorias === "undefined" || !categorias) return [];

  return [...new Set(Object.values(categorias).flat().filter((nombre) => typeof nombre === "string"))];
}

function dividirEnBloques(lista, tamano = 8) {
  const bloques = [];
  for (let i = 0; i < lista.length; i += tamano) {
    bloques.push(lista.slice(i, i + tamano));
  }
  return bloques;
}

async function consultarEstadisticasRanking(nombres) {
  const client = typeof obtenerClienteSupabase === "function"
    ? obtenerClienteSupabase()
    : null;

  if (!client || !Array.isArray(nombres) || !nombres.length) return new Map();

  const resultado = new Map();
  const bloques = dividirEnBloques([...new Set(nombres)], 8);

  // Los bloques evitan URLs gigantes con nombres Unicode muy largos.
  const respuestas = await Promise.allSettled(
    bloques.map(async (bloque) => {
      const { data, error } = await client
        .from("estadisticas_nombres")
        .select("nombre, copias, favoritos")
        .in("nombre", bloque);

      if (error) throw error;
      return Array.isArray(data) ? data : [];
    })
  );

  respuestas.forEach((respuesta) => {
    if (respuesta.status !== "fulfilled") {
      console.warn("Una parte de la precarga de estadísticas falló:", respuesta.reason);
      return;
    }

    respuesta.value.forEach((fila) => {
      resultado.set(fila.nombre, {
        copias: normalizarNumeroRanking(fila.copias),
        favoritos: normalizarNumeroRanking(fila.favoritos),
      });
    });
  });

  // Los nombres sin fila siguen siendo válidos y equivalen a 0/0.
  nombres.forEach((nombre) => {
    if (!resultado.has(nombre)) {
      resultado.set(nombre, { copias: 0, favoritos: 0 });
    }
  });

  return resultado;
}

function fusionarEstadisticasRanking(mapa) {
  if (!(mapa instanceof Map)) return;

  mapa.forEach((stats, nombre) => {
    estadoRankingCategorias.estadisticas.set(nombre, {
      copias: normalizarNumeroRanking(stats?.copias),
      favoritos: normalizarNumeroRanking(stats?.favoritos),
    });
  });

  guardarCacheRankingLocal();
}

function pintarEstadisticasCategoriaDesdeCache(nombres) {
  if (typeof contenido === "undefined" || !contenido) return;

  (nombres || []).forEach((nombre) => {
    const tarjeta = obtenerElementoCategoriaPorNombre(nombre);
    if (!tarjeta) return;

    const stats = obtenerEstadisticasRanking(nombre);
    const copias = tarjeta.querySelector(".copiasNombre");
    const favoritos = tarjeta.querySelector(".favoritosNombre");

    if (copias) copias.textContent = `📋 ${stats.copias}`;
    if (favoritos) favoritos.textContent = `❤️ ${stats.favoritos}`;
  });
}


function pintarEstadisticasResultadosDesdeCache(estilos) {
  if (typeof resultados === "undefined" || !resultados) return;

  (estilos || []).forEach((item) => {
    const nombre = item?.texto;
    if (typeof nombre !== "string") return;

    const tarjeta = obtenerElementoResultadoPorNombre(nombre);
    if (!tarjeta) return;

    const stats = obtenerEstadisticasRanking(nombre);
    const copias = tarjeta.querySelector(".copiasNombre");
    const favoritos = tarjeta.querySelector(".favoritosNombre");

    if (copias) copias.textContent = `📋 ${stats.copias}`;
    if (favoritos) favoritos.textContent = `❤️ ${stats.favoritos}`;
  });
}

function actualizarEstadisticasResultadosEnSegundoPlano(estilos) {
  const nombres = (estilos || [])
    .map((item) => item?.texto)
    .filter((nombre) => typeof nombre === "string" && nombre.length);

  if (!nombres.length) return;

  // Render inmediato con caché: nunca bloquea la aparición de las tarjetas.
  pintarEstadisticasResultadosDesdeCache(estilos);

  consultarEstadisticasRanking(nombres)
    .then((mapa) => {
      fusionarEstadisticasRanking(mapa);
      pintarEstadisticasResultadosDesdeCache(estilos);
    })
    .catch((error) => {
      console.warn("No se pudieron actualizar las estadísticas del generador:", error);
    });
}

function iniciarPrecargaRankingCategorias() {
  if (estadoRankingCategorias.precargaPromesa) {
    return estadoRankingCategorias.precargaPromesa;
  }

  const nombres = obtenerTodosLosNombresCategorias();

  estadoRankingCategorias.precargaPromesa = consultarEstadisticasRanking(nombres)
    .then((mapa) => {
      fusionarEstadisticasRanking(mapa);
      estadoRankingCategorias.precargaCompleta = true;
      return mapa;
    })
    .catch((error) => {
      // Nunca propagamos el fallo a la navegación.
      console.warn("La precarga de ranking no pudo completarse:", error);
      return new Map();
    })
    .finally(() => {
      estadoRankingCategorias.precargaCompleta = true;
    });

  return estadoRankingCategorias.precargaPromesa;
}

function actualizarEstadisticasCategoriaEnSegundoPlano(nombres) {
  // Primero pintamos inmediatamente cualquier valor guardado localmente.
  pintarEstadisticasCategoriaDesdeCache(nombres);

  // Si la precarga global sigue trabajando, aprovechamos esa misma petición.
  const promesa = iniciarPrecargaRankingCategorias();

  promesa.then(() => {
    // Sólo pinta tarjetas que todavía existan en pantalla.
    pintarEstadisticasCategoriaDesdeCache(nombres);
  });
}

// La caché local se hidrata de forma síncrona al cargar el script.
cargarCacheRankingLocal();
