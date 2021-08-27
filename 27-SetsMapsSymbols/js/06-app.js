function crearIterador(carrito) {
    let indice = 0;
    return {
        siguiente : () => {

            const fin = ( indice >= carrito.length );
            const valor = !fin ? carrito[indice++]  : undefined ;

            return  {
                fin,
                valor
            }
        }
    } 
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

//Utiliza el iterador 
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());