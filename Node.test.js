const { default: test } = require('node:test');
const cadenaInversa = require('./Node');
test('invierte la cadena "hola" a "aloh"', () => {
    expect(cadenaInversa('hola')).toBe('aloh');
});

test('invierte cadena vacia a cadena vacia', () => {
    expect(cadenaInversa('')).toBe('');
});

test('invierte cadena con espacios "abc def" a "fed cba"', () => {
    expect(cadenaInversa('abc def')).toBe('fed cba');
});
