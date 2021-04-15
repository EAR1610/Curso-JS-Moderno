const suma = ( a, b ) => a + b ;
const resta = ( a, b ) => a - b;
const multiplicar = ( a, b ) => a * b;

const sumarORestarOmultiplicar = fn => fn( 10, 20 );

console.log( sumarORestarOmultiplicar( suma ) );   //Output 30
console.log( sumarORestarOmultiplicar( resta ) );   //Output -10
console.log( sumarORestarOmultiplicar( multiplicar ) );    //Output 200