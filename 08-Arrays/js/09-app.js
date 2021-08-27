const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Monitor 30 pulgadas', precio : 600},
    { nombre : 'Monitor 42 pulgadas', precio : 100},
    { nombre : 'Monitor 31 pulgadas', precio : 400},
    { nombre : 'Monitor 44 pulgadas', precio : 200},
    { nombre : 'Monitor 23 pulgadas', precio : 300},
]

for (let index = 0; index < carrito.length; index++) {
    console.log(`${carrito[index]['nombre']} - Precio: ${carrito[index]['precio']}`);
}

carrito.forEach( function(producto) {
    console.log(`${producto['nombre']} - Precio: ${producto['precio']}`);
})

