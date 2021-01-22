//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
EventListeners();

function EventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', AgregarTweet);    

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        console.log(tweets);

        CrearHTML();
    })

    
}




//Funciones
function AgregarTweet(e) {
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validacion
    if (tweet === '') {
        MostrarError('Un tweet no puede ir vacío');

        return;     //Evita que se ejecuten más líneas de código
    }

    const tweetObj = {
        id : Date.now(),
        tweet,  //Esto es igual a tweet : tweet. Cuando la llave y el valor son iguales, solo se pasa 1 vez......
    }

    //Añadir al arreglo de Tweets..
    tweets = [...tweets, tweetObj];

    //Una vez agregado, vamos a crear el HTML
    CrearHTML();

    //Reiniciar el Formulario
    formulario.reset();
}

//Mostar mensaje de Error
function MostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos
    setTimeout( () => {
        mensajeError.remove();
    }, 3000); 
}

//Muestra un listado de los tweets
function CrearHTML() {

    LimpiarHTML()
    
    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                BorrarTweet(tweet['id']);
            }


            //Crear el HTML
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet['tweet'];

            //Añadir el boton
            li.appendChild(btnEliminar);

            //insertando en el HTML
            listaTweets.appendChild(li);
        });
    }

    SincronizarStorage();
}

//Agrega los tweets actuales a LocalStorage
function SincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify( tweets ) );
}

//Elimina un Tweet
function BorrarTweet(id) {
    tweets = tweets.filter( tweet => tweet['id'] !== id );

    CrearHTML();
}

//Limpiar el HTML
function LimpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}