/* const meses = ['Enero','Febrero','Marzo'];

//Agregando elementos al arreglo

//Agregando al final del arreglo
meses.push('Abril');
meses.push('Mayo');

console.table(meses); */

const carrito = [];

//Definir un producto
const producto = {
    nombre : 'Monitor 32 Pulgadas',
    precio : 400,
}

const producto2 = {
    nombre : 'Celular',
    precio : 750,
}

//.push agrega un elemento al final del arreglo

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre : 'Teclado',
    precio : 50,
}

//Agregar un elemento al final del arreglo
carrito.unshift(producto3);

console.table(carrito);