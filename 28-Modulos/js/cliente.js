/* (function () {
    console.log('Desde un IIFE');
})(); */

export const nombreCliente = 'Alexander';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

export function tienesSaldo(ahorro) {
    if (ahorro>0) {
        console.log('Si tienes saldo');
    } else {
        console.log('El cliente no tiene saldo')
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el export Default');
}


/**
 * Solamente podemos tener un export default
 */

/**
 * IMPORTANT
 * IIFE mantiene localmente las variables y no se van a mezclar con otro archivo
 */