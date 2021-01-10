const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Televisión', precio : 600},
    { nombre : 'Tablet', precio : 100, descuento : true},
    { nombre : 'Audifonos', precio : 400},
    { nombre : 'Teclado', precio : 200},
    { nombre : 'Celular', precio : 300},
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto['nombre']);
}