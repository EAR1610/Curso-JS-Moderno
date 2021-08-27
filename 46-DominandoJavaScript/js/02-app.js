//Hoisting

obtenerCliente("Alexander");    //Esto funciona por que JS trabaja en dos partes...... en la primera, se registra las funciones en el segunda se ejecutan
function obtenerCliente( nombre ) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// obtenerCliente2('Bill'); // En este caso no funciona debido a que es igual al de declarar una variable, y lo toma como undefined
const obtenerCliente2 = function( nombre ) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2('Bill');