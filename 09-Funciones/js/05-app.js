function Sumar(a, b) {      //a y b son PARAMETROS
    console.log( a + b );
}

Sumar(2, 3);    // 2 y 3 son ARGUMENTOS, los argumentos son los valores reales, mientras que los parametros son representativos

Sumar(200,184);



function Saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

Saludar('Alexander', 'Reynoso');

/**
 * Si no colocamos los argumentos correctamente, Js lo coloca como 'undefined'
 */