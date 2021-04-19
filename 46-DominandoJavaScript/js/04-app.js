//Implicit Binding

const usuario = {
    nombre : 'Alexander',
    edad : 20,
    informacion() {
        console.log(`Mi nombre es: ${this.nombre} y mi edad es: ${this.edad}`);
    },
    mascota : {
        nombre : 'Hook',
        edad : 3,
        informacion() {
            console.log(`Mi mascota es: ${this.nombre} y su edad es: ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();