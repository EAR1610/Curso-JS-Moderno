const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (cheque){
    console.log('Si tengo cheque');
} else if (tarjeta){
    console.log('Si puedo pagar porque tengo tarjeta');
} else {
    console.log('Fondos insuficientes');
}