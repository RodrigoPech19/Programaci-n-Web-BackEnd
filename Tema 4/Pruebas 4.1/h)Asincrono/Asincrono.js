// funciones.js
function obtenerUsuario(id) {
  if (id > 0) {
    return Promise.resolve({ id: id, nombre: "Usuario Demo" });
  } else {
    return Promise.reject(new Error("ID inválido"));
  }
}

module.exports = { obtenerUsuario };
