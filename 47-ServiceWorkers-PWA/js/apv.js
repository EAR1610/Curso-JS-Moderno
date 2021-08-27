
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas citas
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('submit', nuevaCita);

// Heading
const heading = document.querySelector('#administra');


let editando = false;


// Eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);        
}

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}


function datosCita(e) {
     citaObj[e.target.name] = e.target.value;
}

// CLasses
class Citas {
    constructor() {
        this.citas = JSON.parse( localStorage.getItem('misCitas') ) || [];
    }
    agregarCita( cita ) {
        this.citas = [ ...this.citas, cita ];
    }
    editarCita( citaActualizada ) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita )
    }

    eliminarCita( id ) {
        this.citas = this.citas.filter( cita => cita.id !== id );
    }
}

class UI {

    constructor( { citas } ) {
        this.textoHeading( citas );
    }

    imprimirAlerta( mensaje, tipo ) {

        const alerta  = document.querySelector('.alert');

        if ( !alerta ) {
            // Crea el div
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
            
            // Si es de tipo error agrega una clase
            if( tipo ) {
                divMensaje.classList.add('alert-danger');
            } else {
                divMensaje.classList.add('alert-success');
            }
            
            divMensaje.textContent = mensaje;

            // Insertar en el DOM
            document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita') );
            
            setTimeout( () => {
                divMensaje.remove();
            }, 3000);
        }
   }

   imprimirCitas( { citas } ) { 
       
        this.limpiarHTML();

        this.textoHeading( citas );

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // scRIPTING DE LOS ELEMENTOS...
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.innerHTML = `${ mascota }`;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${ propietario }`;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${ telefono }`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${ fecha }`;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${ hora }`;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${ sintomas }`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita( id ); 
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion( cita );
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita);
        });

        SincronizarStorage(citas);    
   }

   textoHeading( citas ) {
        if( citas.length > 0 ) {
            heading.textContent = 'Administra tus Citas'
        } else {
            heading.textContent = 'No hay Citas, comienza creando una'
        }
    }

   limpiarHTML() {
        while( contenedorCitas.firstChild ) {
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
   }
}


const administrarCitas = new Citas();
const ui = new UI( administrarCitas );

ui.imprimirCitas( administrarCitas );

function nuevaCita(e) {
    e.preventDefault();

    // Validar
    if( validar( citaObj ) ) {
        ui.imprimirAlerta('Todos los campos son Obligatorios', 'error')

        return;
    }

    if( editando ) {
        // Estamos editando
        administrarCitas.editarCita( { ...citaObj } );

        ui.imprimirAlerta('Editado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registro

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        administrarCitas.agregarCita( { ...citaObj } );

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas( administrarCitas );

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function validar( obj ) {
    return !Object.values(obj).every(element => element !== '');
}

function SincronizarStorage( citas ){
    localStorage.setItem('misCitas', JSON.stringify( citas ));
}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


function eliminarCita( id ) {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "Una cita eliminada, no podrá recuperarse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarla!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminada!',
            'La cita ha sido eliminada',
            'success'
          )
          administrarCitas.eliminarCita( id );
          ui.imprimirCitas( administrarCitas );
        }
      })    
}

function cargarEdicion( { mascota, propietario, telefono, fecha, hora, sintomas, id } ) {

    // Reiniciar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Llenar los Inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}