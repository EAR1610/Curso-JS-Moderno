"use strict";

//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

/**
 Sellar un objeto, no se pueden agregar propiedades. Pero si modificarlas.
**/

Object.seal(producto);

producto['disponible'] = false;

console.log(producto);

//Saber si un objeto está sellado
console.log(Object.isSealed(producto));