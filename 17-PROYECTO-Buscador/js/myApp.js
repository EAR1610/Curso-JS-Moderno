//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 11;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    MostrarAutos( autos ); //Muestra los autos al cargar la página


    //Llena las opciones de años
    LlenarSelect();
})


//Event Listeners para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda['marca'] = e.target.value;

    FiltrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda['year'] = parseInt( e.target.value );

    FiltrarAuto();
})


minimo.addEventListener('change', e => {
    datosBusqueda['minimo'] = e.target.value;

    FiltrarAuto();
})


maximo.addEventListener('change', e => {
    datosBusqueda['maximo'] = e.target.value;

    FiltrarAuto();
})


puertas.addEventListener('change', e => {
    datosBusqueda['puertas'] = parseInt( e.target.value );

    FiltrarAuto();
})


transmision.addEventListener('change', e => {
    datosBusqueda['transmision'] = e.target.value;

    FiltrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda['color'] = e.target.value;

    FiltrarAuto();
})




//Funciones
function MostrarAutos( autos ) {

    LimpiarHTML(); //Limpiamos el HTML previo

    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${ marca } ${ modelo } - ${ year } -${ puertas } Puertas - Transmisión: ${ transmision } - Precio: ${ precio } - Color: ${ color }
        `;

        //Insertar en el HTML
        resultado.appendChild( autoHTML );
    })
}


function LimpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}

//Genera los años del select
function LlenarSelect() {
    
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild( opcion );
    }
}

//Funcion que filtra en base a la busqueda
function FiltrarAuto() {
    const resultado = autos.filter( FiltrarMarca ).filter( FiltrarYear ).filter( FiltrarMinimo ).filter( FiltrarMaximo ). filter( FiltrarPuertas ).filter( FiltrarTransmision ).filter( FiltrarColor )

    console.log(resultado)
    if ( resultado.length ) {
        MostrarAutos( resultado );
    } else {
        NoHayResultado();
    }
}

function NoHayResultado() {
    
    LimpiarHTML();

    const noHayResultado = document.createElement('div');
    noHayResultado.classList.add('alerta', 'error');
    noHayResultado.textContent = 'No hay resultados, intenta con otros términos de busqueda';

    resultado.appendChild( noHayResultado ); //Colocamos el mensaje
}


function FiltrarMarca( auto ) {
    const { marca } = datosBusqueda;

    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function FiltrarYear( auto ) {
    const { year } = datosBusqueda;

    if ( year ) {
        return auto.year === year;
    }
    
    return auto;
}


function FiltrarMinimo( auto ) {
    const { minimo } = datosBusqueda;

    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}


function FiltrarMaximo( auto ) {
    const { maximo } = datosBusqueda;

    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}

function FiltrarPuertas( auto ) {
    const { puertas } = datosBusqueda;

    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}


function FiltrarTransmision( auto ) {
    const { transmision } = datosBusqueda;

    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}


function FiltrarColor( auto ) {
    const { color } = datosBusqueda;

    if ( color ) {
        return auto.color === color;
    }
    return auto;
}
