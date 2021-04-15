// Funciones Puras o Pure Functions
const numero1 = 20;
const duplicar = numero => numero * 2;
const cuadrado = numero => numero * numero;

const resultado = duplicar( numero1 );
const resultado2 = cuadrado( numero1 );

console.log( resultado );
console.log( numero1 );

console.log( resultado2 );
