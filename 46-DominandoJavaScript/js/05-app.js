//Explicit Binding

function persona(elemento1, elemento2) {
    console.log(`Mi nombes es: ${this.nombre} y escucho ${elemento1} y ${elemento2}`);
}


const informacion = {
    nombre : 'Alexander',
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();


/**
 * La diferencia entre call y apply es: que en call, debemos de pasar cada elmento en forma individual. apply toma todo el arreglo
   .bind crea una nueva funcion, y su funcionamiento es similar a call.
*/