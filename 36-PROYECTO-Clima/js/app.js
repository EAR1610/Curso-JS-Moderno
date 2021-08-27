const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const busquedaVoz = document.querySelector('#busquedaVoz');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);

    busquedaVoz.onclick = () => BuscarPorVoz();    
})

function BuscarPorVoz() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    //start recognition
    recognition.start();

    recognition.start = function() {
        console.log('Escuchando....');
    }

    recognition.onspeechend = function() {
        console.log('Se dejo de ejecutar');
        recognition.stop();
    }

    recognition.onresult = function(e) {
        let transcript = e.results[0][0].transcript;
        const ciudad = document.querySelector('#ciudad');
        ciudad.value = transcript;
    }
}

function buscarClima(e) {
    e.preventDefault();

    //validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    consultarAPI(ciudad, pais);
}

function mostrarError( mensaje ) {
    const alerta  = document.querySelector('.bg-red-100');
    
    if (!alerta) {
         //Crear una alerta
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md','mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class = "font-bold"> Error!</strong>
            <span class = "block"> ${mensaje}</span>
        `;

        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();            
        }, 5000);
    }

}

function consultarAPI(ciudad, pais) {
    
    const appId = '5a3821d912223d94e5372c8ea2df8789';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner();  

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {

            limpiarHTML();

            if ( datos.cod === '404' ) {
                mostrarError('Ciudad no encontrada');
                return;
            }

            mostrarClima(datos);
            formulario.reset();
        })
}

function mostrarClima( { name, main: { temp, temp_max, temp_min } } ) {
    const centigrados  = kelvinACentigrados(temp);
    const max  = kelvinACentigrados(temp_max);
    const min  = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const temperaturaMaxima = document.createElement('p');
    temperaturaMaxima.innerHTML = `Max:${max} &#8451;`;
    temperaturaMaxima.classList.add('text-xl');

    const temperaturaMinima = document.createElement('p');
    temperaturaMinima.innerHTML = `Min:${min} &#8451;`;
    temperaturaMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(temperaturaMaxima);
    resultadoDiv.appendChild(temperaturaMinima);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}