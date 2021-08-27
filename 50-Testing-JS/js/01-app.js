//Probar 2 valores

function suma(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(2,2);
let esperado = 3;   //Mal implementado el valor esperado......

if (resultado !== esperado) {
    console.error(`El resultado ${resultado} es diferente a lo esperado ${esperado}; la prueba no pasó`);
} else {
    console.log('La prueba pasó correctamente');
}

resultado = restar(10,5);
esperado = 5;

if (resultado !== esperado) {
    console.error(`El resultado ${resultado} es diferente a lo esperado ${esperado}; la prueba no pasó`);
} else {
    console.log('La prueba pasó correctamente');
}