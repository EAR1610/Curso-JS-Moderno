/**
 * DIFERENCIAS ENTRE BREAK Y CONTINUE
 * 
 * BREAK: va a cortar la ejecución de un For Loop
 * CONTINUE: nos permite intersectar un elemento, identificarlo y continuar la ejecución
 * Se puede decir que continue, rompe un ciclo y avanza al otro. Mientras que break rompe el ciclo y no vuelve 
 * a ejecutar el For Loop
 * 
 */

 //Crear un for Lopp que al detectar el elemento 5, detenga su ejecución
 /* for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log('CINCO'); 
        continue;        
    }
    console.log(`Numero: ${i}`);
} */

const carrito = [
    { nombre : 'Monitor 27 pulgadas', precio : 500},
    { nombre : 'Televisión', precio : 600},
    { nombre : 'Tablet', precio : 100, descuento : true},
    { nombre : 'Audifonos', precio : 400},
    { nombre : 'Teclado', precio : 200},
    { nombre : 'Celular', precio : 300},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i]['descuento']) {
        console.log(`El artículo ${carrito[i]['nombre']} tiene DESCUENTO`);
        continue;
    }
    console.log(carrito[i]['nombre']);
}
