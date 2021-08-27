//Singleton

let instancia = null;

class Persona{
    constructor(nombre, email){          
        if (!instancia) {   //Si instancia no tiene un valor
            this.nombre = nombre;
            this.email = email;
            instancia = this; //Instancia va a ser igual a la clase Persona
        } else {
            return instancia;
        }
    }
}   

const persona = new Persona('Alexander', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Elon', 'elon@elon.com');  //No toma en cuenta este objeto
console.log(persona2);