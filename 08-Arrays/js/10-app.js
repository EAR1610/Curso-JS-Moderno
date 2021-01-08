const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Monitor 30 pulgadas', precio : 600},
    { nombre : 'Monitor 42 pulgadas', precio : 100},
    { nombre : 'Monitor 31 pulgadas', precio : 400},
    { nombre : 'Monitor 44 pulgadas', precio : 200},
    { nombre : 'Monitor 23 pulgadas', precio : 300},
]

const nuevoArreglo = carrito.forEach( function(producto) {
    return `${producto['nombre']} - Precio: ${producto['precio']}`;
})


const nuevoArreglo2 = carrito.map( function(producto) {
    return `${producto['nombre']} - Precio: ${producto['precio']}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

/*  Diferencia entre foreach y map
    .map :  Te crea un arreglo nuevo, va a llenar una variable con un arreglo nuevo y foreach NO */

