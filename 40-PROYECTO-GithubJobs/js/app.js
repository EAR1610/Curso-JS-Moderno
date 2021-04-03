const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBuscar);
})

function validarBuscar(e) {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;

    if(busqueda.length == 0){
        limpiarHTML();
        mostarMensaje('Debe de colocar un término de búsqueda');
        formulario.reset();
        return;
    }

    if(busqueda.length < 3){
        mostarMensaje('Busqueda muy corta... Añade más información');
        formulario.reset();
        return;
    }

    consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
    const githubURL = `https://jobs.github.com/positions.json?search=${busqueda}`;
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent( githubURL ) }`;

    axios.get(url)
        .then(respuesta => mostarVacantes(JSON.parse( respuesta.data.contents )))
}

function mostarMensaje(mensaje) {
    const alertaPrevia = document.querySelector('.alerta');

    if(!alertaPrevia){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alerta.textContent = mensaje;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
    
}

function limpiarHTML() {

    while (resultado.firstChild) {
        resultado.removeChild( resultado.firstChild );
    }
}

function mostarVacantes(vacantes) {

    limpiarHTML();

    if(vacantes.length > 0){
        resultado.classList.add('grid');

        vacantes.forEach(vacante => {
            const { company, title, type, url, created_at, company_url } = vacante;

            resultado.innerHTML += `
            <div class="shadow bg-white p-6 rounded">
                <h2 class="text-2xl font-light mb-4">${title}</h2>
                <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                <p class="font-bold uppercase">Creado el:   <span class="font-light normal-case">${created_at} </span></p>
                <p class="font-bold uppercase">URL Compañia:   <span class="font-light normal-case">${company_url} </span></p>
                <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}" target = "_blank" rel="noopener noreferrer" >Ver Vacante</a>
            </div>
            `;
        });
    } else {
        const noResultado = document.createElement('p');
        noResultado.classList.add('text-center', 'mt-10', 'text-gray-600', 'w-full');
        resultado.classList.remove('grid');
        noResultado.textContent = 'No hay vacantes, intenta con otro término de búsqueda';
        formulario.reset();
        resultado.appendChild( noResultado );
    }
}