const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Monitor 30 pulgadas', precio : 600},
    { nombre : 'Monitor 42 pulgadas', precio : 100},
    { nombre : 'Monitor 31 pulgadas', precio : 400},
    { nombre : 'Monitor 44 pulgadas', precio : 200},
    { nombre : 'Monitor 23 pulgadas', precio : 300},
]

const nuevoArreglo = carrito.forEach( producto => console.log(`${producto['nombre']} - Precio: ${producto['precio']}`));


const nuevoArreglo2 = carrito.map( producto => `${producto['nombre']} - Precio: ${producto['precio']}`);

console.log(nuevoArreglo2);



/**
 * DIFERENCIAS ENTRE FOR EACH Y MAP
 * For each: imprime los resultados en cada linea
 * .map: imprime el resultado como un array
 */
