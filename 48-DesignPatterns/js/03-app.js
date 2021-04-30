//Singleton

let instancia = null;

class Persona{
    constructor(nombre, email){
        if (!instancia) {   //Si instancia es true
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}   

const persona = new Persona('Alexander', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Elon', 'elon@elon.com');  //No toma en cuenta este objeto
console.log(persona2);