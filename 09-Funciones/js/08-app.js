
function Sumar(a, b) {
    return a + b;
}

const resultado = Sumar(75,96);
console.log(resultado);


//Ejemplo avanzado
let total = 0;

function AgregarCarrito(precio) {
   return total += precio;     
}

function CalcularImpuesto(total) {
    return total * 1.15;
}

total = AgregarCarrito(300);
total = AgregarCarrito(100);
total = AgregarCarrito(600);


const totalPagar = CalcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar}`);

console.log(total);