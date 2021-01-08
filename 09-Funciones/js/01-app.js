/**
 * Existen 2 formas de crear funciones en Js
 * 1: Declaración de función.
 * 2: Expresión de función.
 */

//Declaración de función (  Function declaration    )

function sumar() {
    console.log(2 + 2);
}

sumar();
sumar();
sumar();


//Expresión de la función ( Function Expression  )

const sumar2 = function() {
    console.log( 3 + 3 );
}

sumar2();