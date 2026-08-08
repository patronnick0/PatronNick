const STORAGE_FAVORITOS = "favoritos";

let favoritos = cargarFavoritos();

function cargarFavoritos() {
  try {
    const data = localStorage.getItem(STORAGE_FAVORITOS);
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function guardarFavoritos() {
  localStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(favoritos));
}

function obtenerFavoritos() {
  return [...favoritos];
}

function esFavorito(nombre) {
  return favoritos.includes(nombre);
}

function agregarFavorito(nombre) {
  if (esFavorito(nombre)) return false;

  favoritos.push(nombre);
  guardarFavoritos();
  return true;
}

function eliminarFavorito(nombre) {
  const antes = favoritos.length;
  favoritos = favoritos.filter((item) => item !== nombre);
  guardarFavoritos();
  return favoritos.length !== antes;
}
