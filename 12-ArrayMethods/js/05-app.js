const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Con un foreach
let resultado = '';
carrito.forEach((producto, index) => {
    if (producto['nombre'] === 'Tablet') {
        resultado = carrito[index];
    }
});
console.log(resultado);

//Con un .find
let resultado2 = carrito.find(producto => producto['nombre'] === 'Tablet');
console.log(resultado2);

/**
 * Important
 * .find solo va a retornar el primer elemento que cumpla la condición
 */
