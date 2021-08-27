
//Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotización con los datos
Seguro.prototype.CotizarSeguro = function() {
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    console.log(this.marca);

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    
        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad)  / 100;

    /* 
        Si el seguro es básico, se multiplica por un 30% +
        Si el seguro es completo, se multiplica por un 50% +
    */
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI() {}

//Llena las opciones de los años
UI.prototype.LlenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for (let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        selectYear.appendChild( option );
    }
}

//Muestra alertas en pantalla
UI.prototype.MostarMensaje =  ( mensaje, tipo ) => {
    const div = document.createElement('div');

    if ( tipo === 'error' ) {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore( div, document.querySelector('#resultado') );


    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.MostrarResultado = ( total, seguro ) => {

    const { marca, year, tipo } = seguro;
    let tipoMarca;

    switch (marca) {
        case '1':
           tipoMarca = 'Americano' 
            break;
        case '2':
            tipoMarca = 'Asiatico' 
            break;
        case '3':
           tipoMarca = 'Europeo' 
            break;    
        default:
            break;
    }
     
    //Crear resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header"> Tu Resúmen </p>
        <p class=font-bold> Marca: <span class = "font-normal"> ${tipoMarca} </span> </p>
        <p class=font-bold> Año: <span class = "font-normal"> ${year} </span> </p>
        <p class=font-bold> Tipo: <span class = "font-normal capitalize"> ${tipo} </span> </p>
        <p class=font-bold> Total: <span class = "font-normal"> $ ${total} </span> </p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    

    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; //Se oculta el spinner
        resultadoDiv.appendChild(div); //Se muestra el resultado
    }, 3000);

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.reset();

}

//Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.LlenarOpciones(); //Llena el select con los años...
})

EventListeners()
function EventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');

    formulario.addEventListener('submit', CotizarSeguro);
}

function CotizarSeguro(e) {
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value
    
    if ( marca === '' ) {
        ui.MostarMensaje('Todos los campos son obligatorios', 'error')
        return;
    } 
    
    ui.MostarMensaje('Cotizando...', 'exito')

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');

    if ( resultados !== null ) {
        resultados.remove();
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.CotizarSeguro();

    //Utilizar el prototype que va a cotizar...
    ui.MostrarResultado(total, seguro);


}