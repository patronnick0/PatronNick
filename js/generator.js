function obtenerListaFuentes() {
  if (Array.isArray(window.fuentes)) return window.fuentes;
  if (Array.isArray(window.fonts)) return window.fonts;
  return [];
}

function aplicarFuente(texto, mapa) {
  let resultado = "";

  for (const letra of texto) {
    resultado += mapa?.[letra] || letra;
  }

  return resultado;
}

function generarEstilos(nombre) {
  const texto = String(nombre || "").trim();
  if (!texto) return [];

  const resultados = [];
  const vistos = new Set();

  for (const fuente of obtenerListaFuentes()) {
    const mapa =
      fuente.abc || fuente.mapa || fuente.letras || fuente.map || fuente;

    const estilo = aplicarFuente(texto, mapa);

    if (!estilo || vistos.has(estilo)) continue;

    vistos.add(estilo);

    resultados.push({
      fuente: fuente.nombre || fuente.name || "Fuente",
      texto: estilo,
    });
  }

  return resultados;
}
