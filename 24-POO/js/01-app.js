//Se le conoce como Class Declarations
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    MostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}


const Alexander = new Cliente('Alex', 475);
console.log(Alexander.MostrarInformacion());
console.log(Alexander);

//Las static no es necesario instanciarlas, si la trato de llamar desde el objeto, mostrará un error
console.log(Cliente.bienvenida());


//Se le conoce como Class Expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    MostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
}

const Alexander2 = new Cliente2('Alex', 475);
console.log(Alexander2.MostrarInformacion());
console.log(Alexander2);