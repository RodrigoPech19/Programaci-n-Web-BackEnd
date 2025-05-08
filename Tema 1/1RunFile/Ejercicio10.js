// 10. Escribe una función que simule una operación asíncrona utilizando setTimeout y maneje el resultado con un callback.

function operacionAsincrona(callback) {
    setTimeout(() => {
        callback("Operación completada");
    }, 2000);
}
operacionAsincrona(console.log);