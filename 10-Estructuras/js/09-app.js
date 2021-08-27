const autenticado = true;
const puedePagar = false;

//  OPERADOR TERNARIO ANIDADO
console.log(autenticado ? puedePagar ? 'Si está autenticado y si puede pagar' : 'Si autenticado, no puede pagar' : 
'No esta autenticado');



//      IF ANIDADOS 

/* const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;     

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if (efectivo > totalPagar) {
        console.log('Pagaste con efectivo');
    }else{
        console.log('Otra forma de pago');
    }
}else{
    console.log('Fondos insuficientes');
} */


/**
 * En el operador ternario '?' podemos utilizar and y or '&& ||'
 */