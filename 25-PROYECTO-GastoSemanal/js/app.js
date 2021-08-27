//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos

EventListener()
function EventListener() {
    document.addEventListener('DOMContentLoaded', PreguntarPresupuesto);

    formulario.addEventListener('submit', AgregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    NuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.CalcularRestante();
    }

    CalcularRestante() {
        const gastado = this.gastos.reduce( ( total, gasto ) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    EliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.CalcularRestante();
    }
}

class UI {
    InsertarPresupuesto( cantidad ) {
        //Extrayendo los valores
        const { presupuesto, restante } = cantidad;

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    ImprimirAlerta( mensaje, tipo ){
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if ( tipo === 'error' ) {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario );

        //Quitar el HTMl
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    MostrarGastos(gastos) {

        this.LimpiarHTML(); //Elimina el HTML previo
        
        //Iterar sobre los gastos
        gastos.forEach( gasto => {
            
            const { cantidad, nombre, id } = gasto;

            //Crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => {
                EliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    LimpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    ActualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante; 
    }

    ComprobarPresupuesto( { presupuesto, restante } ) {

        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if ( (presupuesto / 4) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ( (presupuesto / 2) > restante ) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning')
            restanteDiv.classList.add('alert-success')
        }


        //Si el total es cero o menor
        if (restante <= 0) {
            ui.ImprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else {
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }
}

//Instanciar 
const ui = new UI();

let presupuesto;

//Funciones
function PreguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    /* console.log(presupuestoUsuario); */

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN( presupuestoUsuario ) || presupuestoUsuario <= 0) {
        window.location.reload();     //Recarga la ventana actual
    }

    presupuesto = new Presupuesto( presupuestoUsuario );
    console.log(presupuesto);

    ui.InsertarPresupuesto(presupuesto);
}

//Agrega gastos
function AgregarGasto(e) {
    e.preventDefault();


    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number( document.querySelector('#cantidad').value );

    //Validar
    if ( nombre === '' ) {
        ui.ImprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    } else if ( cantidad <= 0 || isNaN( cantidad ) ) {
        ui.ImprimirAlerta('Cantidad no válida', 'error');

        return;
    }

    //Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id:Date.now() };

    //Añade un nuevo gasto
    presupuesto.NuevoGasto( gasto );

    //Mensaje que indica que todo esta bien
    ui.ImprimirAlerta('Gasto agregado Correctamente');

    //Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.MostrarGastos( gastos );
    ui.ActualizarRestante(restante);
    ui.ComprobarPresupuesto(presupuesto);

    //Reinicia el formulario
    formulario.reset();
}

function EliminarGasto(id) {
    //Elimina del Objeto
    presupuesto.EliminarGasto(id)

    //Elimina del HTML
    const { gastos, restante } = presupuesto
    ui.MostrarGastos(gastos);
    ui.ActualizarRestante(restante);
    ui.ComprobarPresupuesto(presupuesto);
}