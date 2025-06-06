const validarContraseña = require('./password'); // Importación de la función

test('Caso normal - contraseña válida', () => {
    expect(validarContraseña("Playa2010@")).toBe(true);
});

test('Caso inválido - menos de 8 caracteres', () => {
    expect(validarContraseña("Pass1@")).toBe(false);
});

test('Caso inválido - sin mayúscula', () => {
    expect(validarContraseña("playa2010@")).toBe(false);
});

test('Caso inválido - sin minúscula', () => {
    expect(validarContraseña("PLAYA2010@")).toBe(false);
});

test('Caso inválido - sin número', () => {
    expect(validarContraseña("Playa@@@@")).toBe(false);
});

test('Caso inválido - sin carácter especial', () => {
    expect(validarContraseña("Playa2010")).toBe(false);
});

test('Caso inválido - sin palabra significativa', () => {
    expect(validarContraseña("XyZ1234@")).toBe(false);
});

test('Caso inválido - con espacios', () => {
    expect(validarContraseña("Playa 2010@")).toBe(false);
});

test('Caso frontera - exactamente 8 caracteres válidos', () => {
    expect(validarContraseña("Abc123@X")).toBe(true);
});

test('Caso inválido - entrada vacía', () => {
    expect(validarContraseña("")).toBe(false);
});

