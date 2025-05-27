const {getUsuario}=require('./ComparacionObjetos');

test('Los objetos son iguales', () => {
  expect(getUsuario()).toEqual({ nombre: "Ana", edad: 22 });
});
