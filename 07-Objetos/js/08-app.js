"use strict";

//use strict nos obliga a programar de manera adecuada, importante su uso.

//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

/**
 Prevenir que un objeto sea modificado
**/

Object.freeze(producto);

console.log(producto);

// Saber si un objeto está congelado o no
console.log(Object.isFrozen(producto));