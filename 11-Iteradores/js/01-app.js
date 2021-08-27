/* for (let i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
} */


//Encontrando números pares e impares
/* for (let i = 0; i <= 20; i++) {
    if (i === 0) {
        console.log(`El número ${i} no se considera PAR ni IMPAR`);
    }
    else if (i%2 === 0) {
        console.log(`El número ${i} es PAR`);
    } else if (i%2 !== 0){
        console.log(`El número ${i} es IMPAR`);
    }
} */

const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Monitor 30 pulgadas', precio : 600},
    { nombre : 'Monitor 42 pulgadas', precio : 100},
    { nombre : 'Monitor 31 pulgadas', precio : 400},
    { nombre : 'Monitor 44 pulgadas', precio : 200},
    { nombre : 'Monitor 23 pulgadas', precio : 300},
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]['nombre']);
}