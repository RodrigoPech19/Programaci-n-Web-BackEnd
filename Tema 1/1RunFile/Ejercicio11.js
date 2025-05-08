// 11.	Escribe un bloque de código que intente convertir una cadena a un número y que                                    maneje cualquier error que pueda ocurrir.

try {
    let cadena = "200T";
    let numero = Number(cadena);
    if (isNaN(numero)) throw new Error("No es un número válido");
    console.log(numero);
} catch (error) {
    console.log("Error:", error.message);
}