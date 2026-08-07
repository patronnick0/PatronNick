
function aplicarFuente(texto, mapa) {
    let resultado = "";

    for (const letra of texto) {
        resultado += mapa[letra] || letra;
    }

    return resultado;
}

function generarEstilos(nombre) {
    const texto = String(nombre || "").trim();
    if (!texto) return [];

    const resultados = [];
    const vistos = new Set();

    for (const fuente of fuentes) {
        const estilo = aplicarFuente(texto, fuente.abc);

        if (estilo && !vistos.has(estilo)) {
            vistos.add(estilo);
            resultados.push({
                fuente: fuente.nombre,
                texto: estilo
            });
        }
    }

    return resultados;
}

