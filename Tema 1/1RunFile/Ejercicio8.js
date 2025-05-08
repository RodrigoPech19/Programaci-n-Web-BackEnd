// 8. Agrega un método al objeto creado anteriormente e imprima una descripción del mismo.

let moto = {
    marca: "Veloci",
    modelo: "Draxter RT",
    color: "Gris",
    año: 2024
};

moto.descripcion = function () {
    return `Esta moto es una ${this.marca} ${this.modelo} ${this.color} del año ${this.año}.`;
};
console.log(moto.descripcion());