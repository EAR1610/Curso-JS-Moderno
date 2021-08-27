const sym = Symbol();
const sym2 = Symbol();

/* if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
} */  //Return Son diferentes

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apelido como llaves del objeto
persona[nombre] = 'Alexander';
persona[apellido] = 'Reynoso';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona); 
// console.log(persona[nombre]);  

// Las propiedades que utilizan un symbol no son iterables
/* for (let i in persona) {
    console.log(i);
} */

//Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';
console.log(cliente);   //Return Symbol
console.log(cliente[nombreCliente]);    //Return Pedro
console.log(nombreCliente);   //Return symbol(nombre del cliente)

/**
 * Ningun symbol es igual
 * Las propiedades que utilizan un symbol no son iterables
 */