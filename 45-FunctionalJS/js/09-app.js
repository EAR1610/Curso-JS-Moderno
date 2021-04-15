
const suma = ( a, b, c ) => a + b + c;

// const parcial = a => ( b, c ) => suma( a, b, c);
// const resultado = parcial( 5 ) ( 4, 3 );
// console.log( resultado );   //Output 12
// console.log( suma( 1, 2, 3 ) );  //Output 6

const parcial = a => b => c => suma( a, b, c );

const resultadoParcial = parcial( 5 ) ( 4 ) ( 3 );  //Partials & Currying

console.log( resultadoParcial );   //Output 12