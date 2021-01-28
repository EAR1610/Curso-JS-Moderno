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

//Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {   //Reescribir un método
        return `Bienvenido al cajero de Empresas`;
    }
}

const Alexander = new Cliente('Alex', 475);
const empresa = new Empresa('Github', 7584, 10197886,'Aprendizaje en Línea');
console.log(empresa);
console.log(empresa.MostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());