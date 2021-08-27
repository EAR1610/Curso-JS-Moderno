const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, index) => {
    if ( mes === 'Abril') {
        console.log(`${mes} encontrado en el indice ${index}`);
    }
})

//ArrayMethod encontrar el indice de Abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//Encontrando 'Audifonos' en el array de objetos
const indiceProducto = carrito.findIndex(producto => producto['nombre'] === 'Audifonos');
if (indiceProducto > 0) {
    console.log(`Audifonos encontrado en el indice ${indiceProducto}`);
}