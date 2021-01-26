function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

Cliente.prototype.retirarSaldo = function(retirar) {
    this.saldo -= retirar;
}


//Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log( pedro.tipoCliente() );
console.log( pedro.nombreClienteSaldo() );
pedro.retirarSaldo(1000);
console.log( pedro.nombreClienteSaldo() );

console.log(pedro);


/**
 * Important
 * ¿Cual es la diferencia entre function () {} y un Arrow function () => {}?
 * El function (), busca en el objeto actual, mientras que el arrow function siempre va a buscar
 * en la ventana global
 */