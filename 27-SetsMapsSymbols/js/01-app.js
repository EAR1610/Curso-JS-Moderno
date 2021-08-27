const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco N1');
carrito.add('Disco N2');
carrito.add('Disco N3');

//Eliminar un elemento del set
console.log( carrito.delete('Disco N3') ); //Return true

//Comprobar si un valor existe en el set
// console.log( carrito.has('Guitarra') ); //false

//Medir su longitud de los sets
// console.log(carrito.size);  //3

//Elimina todos los elementos del set
// carrito.clear();

// console.log(carrito);

carrito.forEach( producto => {
    console.log(producto);
})

//Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

/**
 * Important 
 * los Sets, no se toman valores repetidos, si los hay, solo agregará 1.
 * los sets, son iterables
 * Llave y valor en un set, es lo mismo
 */