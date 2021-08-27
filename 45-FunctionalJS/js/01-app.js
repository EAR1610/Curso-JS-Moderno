//First-Class Function
const suma = function suma( a, b ) {
    return a + b;
}
const resta = function resta( a, b ) {
    return a - b;
}
const multiplica = function multiplica( a, b ) {
    return a * b;
}

const resultadoSuma = suma;
const resultadoResta = resta;
const resultadoMultiplica = multiplica;

console.log( resultadoSuma( 10, 20 ) ); //output = 30
console.log( resultadoResta( 70, 20 ) ); //output = 50
console.log( resultadoMultiplica( 10, 6 ) ); //output = 60