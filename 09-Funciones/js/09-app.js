
const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar : function () {
        console.log('pausando...');
    },
    borrar : function (id) {
        console.log(`Borrando canción: ${id}`);
    },
    playlist : function (nombre) {
        console.log(`Creando la Playlist: ${nombre}`)
    },
    reproducir_playlist : function (nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    },
}

reproductor['reproducir'](30);
reproductor['pausar']();
reproductor['borrar'](30);
reproductor['playlist']('Heavy Metal');
reproductor['reproducir_playlist']('Heavy Metal');