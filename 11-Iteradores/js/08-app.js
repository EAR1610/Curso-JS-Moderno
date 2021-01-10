const automovil = {
    modelo : 'Camaro',
    year : 1969,
    motor : 'Raptor v2.0',
}

/* for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}
 */


//Segunda forma de iterar sobre un objeto ECMAScript 7
for( let [llave, valor] of Object.entries(automovil) ){
    console.log(valor);
    console.log(llave);
}

/**
 * IMPORTANTE
 * For of itera sobre arreglos
 * For in itera sobre objetos
 */