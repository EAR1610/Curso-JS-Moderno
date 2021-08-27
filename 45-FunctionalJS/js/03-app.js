const carrito = [
    { nombre : 'Monitor 20 Pulgadas', precio : 500},
    { nombre : 'Televisión 50 Pulgadas', precio : 700},
    { nombre : 'Tablet', precio : 300},
    { nombre : 'Audifonos', precio : 200},
    { nombre : 'Teclado', precio : 50},
    { nombre : 'Celular', precio : 500},
    { nombre : 'Bocinas', precio : 300},
    { nombre : 'Laptop', precio : 800},
];

//Las dos instrucciones realizan lo mismo, dato importante: se aplica la inmutabilidad, el arreglo no es modificado

// const resultado = carrito.filter( producto => producto.precio > 400 );
// console.log( resultado )
// console.log( carrito )

const mayorA400 = producto => producto.precio > 400;

const resultado = carrito.filter( mayorA400 );
console.log( resultado );
console.log( carrito );