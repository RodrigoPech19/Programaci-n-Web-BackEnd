// funciones.test.js
const { obtenerUsuario } = require('./Asincrono');

test('La promesa se resuelve con un objeto usuario', () => {
  return expect(obtenerUsuario(1)).resolves.toEqual({
    id: 1,
    nombre: "Usuario Demo"
  });
});

test('La promesa se rechaza con un error si el ID es inválido', () => {
  return expect(obtenerUsuario(-1)).rejects.toThrow("ID inválido");
});
