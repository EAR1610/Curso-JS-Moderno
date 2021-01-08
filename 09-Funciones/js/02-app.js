sumar();
//Declaración de función (  Function declaration    )
function sumar() {
    console.log(2 + 2);
}



sumar2();
//Expresión de la función ( Function Expression  )
const sumar2 = function() {
    console.log( 3 + 3 );
}


/**
 * Diferencias:
 * ¿Por qué una 'funcion sirve y la otra no'?, JS se ejecuta en 2 vueltas, se le conoce como: HOYSTING
 * 
 * En la 1 vuelta, JS escanea el documento, registra todas las funciones y determina que variables va a crear. Esta 
 * etapa se le conoce como: ETAPA DE CREACION 
 * 
 * En la segunda vuelta las funciones ya estan registradas
 */
