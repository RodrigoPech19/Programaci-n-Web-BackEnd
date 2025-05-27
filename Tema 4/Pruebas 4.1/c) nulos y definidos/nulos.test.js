const { valorNulo, valorIndefinido, valorDefinido } = require('./nulos');

test('Valor es null', () => {
  expect(valorNulo()).toBeNull();
});

test('Valor es undefined', () => {
  expect(valorIndefinido()).toBeUndefined();
});

test('Valor está definido', () => {
  expect(valorDefinido()).toBeDefined();
});
