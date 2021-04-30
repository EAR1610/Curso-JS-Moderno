//Class Pattern

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Alexander','alex@reynoso.com');

console.log(persona);
console.log(persona.nombre);
console.log(persona.email);