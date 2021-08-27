//For each

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Televisión', precio : 600},
    { nombre : 'Tablet', precio : 100, descuento : true},
    { nombre : 'Audifonos', precio : 400},
    { nombre : 'Teclado', precio : 200},
    { nombre : 'Celular', precio : 300},
]

const nuevoArreglo = carrito.forEach( producto => producto['nombre']);

const nuevoArreglo2 = carrito.map( producto => producto['nombre']);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

/**
 * IMPORTANTE
 * .map crea un arreglo nuevo
 * .forEach no lo crea.
 */