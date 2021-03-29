const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        mostrarAlerta('Agrega un término de busqueda');
        limpiarContenido();
        limpiarPaginado();
        
        return;
    }

    buscarImagenes();

}

function mostrarAlerta(mensaje) {
    const  existeAlerta = document.querySelector('.bg-red-100');

    if (!existeAlerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class = "font-bold">Error!</strong>
            <span class = "block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta); 

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
    
}

function buscarImagenes() {

    const termino = document.querySelector('#termino').value;

    const key = '20900942-5790e4a057f5e75471ea56c27';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => respuesta.json() )
        .then( resultado => {
            
            if (resultado.total === 0) { //Evaluamos si existe una busqueda con el termino
                mostrarAlerta('No hemos obtenido una busqueda, intenta con otro término');
                limpiarContenido();
                limpiarPaginado();
                formulario.reset();
                return;
            }
            totalPaginas = calcularPaginas(resultado.totalHits);
            mostrarImagenes(resultado.hits);
        })
}

//Generador que va a registrar la cantidad de elementos de las páginas
function *crearPaginador(total){
    for(let i = 1; i<= total; i+=1){
        yield i;
    }
}

function calcularPaginas(total) {
    return parseInt( Math.ceil( total / registrosPorPagina ) );
}

function limpiarContenido() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarImagenes(imagenes) {
    
    limpiarContenido();

    //Iterar sobre el arreglo de imagenes y construir el HTML
    imagenes.forEach( imagen => {
        const { previewURL, likes, views, largeImageURL, downloads, favorites } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class = "bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class ="p-4">
                        <p class = "font-bold"> ${likes} <span class = "font-light"> Me Gusta!</span> </p>
                        <p class = "font-bold"> ${views} <span class = "font-light"> Veces vistas!</span> </p>
                        <p class = "font-bold"> ${downloads} <span class = "font-light"> Descargas!</span> </p>
                        <p class = "font-bold"> ${favorites} <span class = "font-light"> Favoritos!</span> </p>

                        <a 
                            class = "block w-full bg-blue-800 hover: bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-2"
                            href = "${largeImageURL}" target = "_blank" rel="noopener noreferrer"
                        >
                            Ver Imagen
                        </a>
                </div>
            </div>
        `;
    })

    formulario.reset();

    limpiarPaginado();

    //Imprimimos el paginador
    imprimirPaginador();
    
}

function limpiarPaginado() {
    //Limpiar paginador previo
    while (paginacionDiv.firstChild) {
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while (true) {
        const { value, done } = iterador.next();
        if (done) return;

        //Caso contrario, genera un boton por cada elemento en el generador
        const boton = document.createElement('a');
        boton.href = "#";
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400','px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');

        boton.onclick = () => {
            paginaActual = value;

            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}