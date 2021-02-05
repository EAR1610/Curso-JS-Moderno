
/* function *crearGenerador() {
    yield 1;
    yield 'Alexander';
    yield 3+3;
    yield true;
} */

/* const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value); //return 1
console.log(iterador.next().value); //return Alexander
console.log(iterador.next().done); //return false
console.log(iterador.next()); 
console.log(iterador.next());  
console.log(iterador); */


//Generador para carrito de compras
function *generadorCarrito( carrito ) {
   for(let i = 0; i < carrito.length; i+=1) {
       yield carrito[i];
   } 
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iterador = generadorCarrito( carrito );

console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );