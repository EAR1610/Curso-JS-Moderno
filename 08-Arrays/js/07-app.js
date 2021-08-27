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

const producto4 = {
    nombre : 'Celular 2',
    precio : 1750,
}

//.push agrega un elemento al final del arreglo

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre : 'Teclado',
    precio : 50,
}

//Agregar un elemento al final del arreglo
carrito.unshift(producto3);

console.table(carrito);

/* //Eliminar el último elemento de un arreglo

carrito.pop();

console.table(carrito);


//Eliminar el inicio del arreglo
carrito.shift();

console.table(carrito);


/*  Imperativa modifica el elemento actual,
    Declarativa NO */ 



// Eliminar una posición en específico en un array
carrito.splice(1,1);
console.table(carrito);

