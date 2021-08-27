const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');
const busquedaVoz = document.querySelector('#busquedaVoz');

const registrosPorPagina = 30;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);

    busquedaVoz.onclick = () => BuscarPorVoz();
}

function BuscarPorVoz() {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition();

    recognition.start();

    recognition.speechend = function(){
        console.log('Se dejo de ejecutar');
        recognition.stop();
    }

    recognition.onresult = function(e){
        let transcript = e.results[0][0].transcript;
        const resultado = document.querySelector('#termino');
        resultado.value = transcript;
    }
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;
    
    if( terminoBusqueda === '' ) {
        mostrarAlerta('Agrega un término de busqueda');
        limpiarContenido();
        limpiarPaginado();

        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.bg-red-100')

    if ( !existeError ) {
        const alerta = document.createElement('p')
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class = "font-bold">Error!</strong>
            <span class = "block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000)
    }
}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value;

    const key = '0pswldvnBE_9PzCNBG09fGqlhF3COsHUE2yjsqD4LAw'
    const url = `https://api.unsplash.com/search/photos?query=${termino}&client_id=${key}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    
    fetch( url ) 
        .then(respuesta => respuesta.json())
        .then(resultado => {

            if ( resultado.total === 0 ) {
                mostrarAlerta('No hemos obtenido una busqueda, intenta con otro término');
                limpiarContenido();
                limpiarPaginado();

                return;
            }
            
            totalPaginas = calcularPaginas( resultado.total );
            mostrarImagenes( resultado.results );
        })
}


function *crearPaginador(total) {

    for ( let i = 1; i <= total; i += 1) {
        yield i;
    }
}

const calcularPaginas = total => parseInt( Math.ceil( total / registrosPorPagina ) )


function limpiarContenido() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}

function mostrarImagenes(imagenes) {

    limpiarContenido();

    imagenes.forEach( imagen => {
        const { urls : { thumb, regular }, likes, user : { name, location } } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class = "bg-white">
                    <img class="w-full" src="${thumb}">

                    <div class = "p-4">
                        <p class = "font-bold"> ${name} <span class = "font-light">: usuario</span> </p>
                        <p class = "font-bold"> ${likes} <span class = "font-light">: Me Gusta!</span> </p>

                        ${ location === null ? '<p class = "font-bold">No hay Localización</p>' : `<p class = "font-bold"> ${location} <span class = "font-light">: Localización</span> </p>` }

                        <a 
                            class = "block w-full bg-blue-800 hover:bg-blue-500 tex-white uppercase font-bold text-center rounded mt-5 p-2"
                            href = "${regular}" target = "_blank" rel="noopener noreferrer"
                        >
                            Ver Imagen
                        </a>
                </div>
            </div>
        `;      
    })

    limpiarPaginado();

    imprimirPaginador();
}


function limpiarPaginado() {
    while ( paginacionDiv.firstChild ){
        paginacionDiv.removeChild( paginacionDiv.firstChild );
    }
}


function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);

    while (true) {

        const { value, done } = iterador.next();

        if ( done ) return;

        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');

        boton.onclick = () => {
            paginaActual = value;

            buscarImagenes();
        }

        for ( let indice = value; indice <= 44; indice += 1 ) {

            paginacionDiv.appendChild( boton );
        } 
    }
      
}