const reproductor = {
    cancion : '',
    reproducir : id => console.log(`Reproduciendo canción con el id: ${id}`),
    pausar :  () => console.log('pausando...'),
    borrar :  id => console.log(`Borrando canción: ${id}`),
    playlist : nombre => console.log(`Creando la Playlist: ${nombre}`),
    reproducir_playlist : nombre => console.log(`Reproduciendo la Playlist: ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor['nuevaCancion'] = 'Enter Sandman';
reproductor['obtenerCancion'];


reproductor['reproducir'](30);
reproductor['pausar']();
reproductor['borrar'](30);
reproductor['playlist']('Heavy Metal');
reproductor['reproducir_playlist']('Heavy Metal');



/**
 * Set es una forma de agregar valores 
 * Get es una forma de obtener esos valores
 */