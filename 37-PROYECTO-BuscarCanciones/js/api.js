import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    } 

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => {
                if ( resultado.lyrics ) {
                    const { lyrics } = resultado; //Destructuring a resultado
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `letra de la canción: ${this.cancion} de ${this.artista}`;
                    UI.formularioBuscar.reset();
                } 
                
            } )
            .catch(error => {
                UI.divMensajes.innerHTML = 'La canción no existe, prueba con otra busqueda';
                UI.divMensajes.classList.add('error');
                UI.formularioBuscar.reset();
                setTimeout(() => {
                    UI.divMensajes.innerHTML = '';
                    UI.divMensajes.classList.remove('error');
                }, 3000);
            })            
    }
}

export default API;