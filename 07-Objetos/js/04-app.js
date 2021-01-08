//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

//Accediendo a una propiedad del objeto y almacenarlo en una variable

/* const nombre = producto['nombre'];
console.log(nombre);
*/



//Segunda forma EMSC6

//Destructuring
const { nombre, precio, disponible } = producto;        //Si una llave no existe, lo coloca como 'undefined'

console.log(nombre);
console.log(precio);
console.log(disponible);
