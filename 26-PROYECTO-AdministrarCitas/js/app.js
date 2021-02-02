//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas {
    constructor() {
        this.citas = [];
    }

    AgregarCita(cita) {
        this.citas = [...this.citas, cita];
    }

    EliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id );
    }

    EditarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
    }
}

class UI {
    ImprimirAlerta(mensaje, tipo) {
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        //Agregar clase en base al tipo de error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Eliminar la alerta despues de 5 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    ImprimirCitas({citas}) {

        this.LimpiarHTML();

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class = "font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class = "font-weight-bolder">Teléfono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class = "font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class = "font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class = "font-weight-bolder">Sintomas: </span> ${sintomas}
            `;

            //Boton para eliminar este cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
            btnEliminar.onclick = () => EliminarCita(id);

            //Añade un boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>';
            btnEditar.onclick = () => CargarEdicion(cita);

            //Agrega los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }

    LimpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

//Registrar eventos
EventListeners();
function EventListeners() {
    mascotaInput.addEventListener('input', DatosCita);
    propietarioInput.addEventListener('input', DatosCita);
    telefonoInput.addEventListener('input', DatosCita);
    fechaInput.addEventListener('input', DatosCita);
    horaInput.addEventListener('input', DatosCita);
    sintomasInput.addEventListener('input', DatosCita);

    formulario.addEventListener('submit', NuevaCita);
}

//Objeto con la información de la cita
citaObj = {
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : '',
}

//Agrega datos al objeto de citas
function DatosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

//Válida y agrega una nueva cita a la clase de citas
function NuevaCita(e) {
    e.preventDefault();

    //Extraer la información del objeto de cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    //Válidar
    if (mascota === '' ||  propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.ImprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    if (editando) {
        ui.ImprimirAlerta('Cita editada correctamente');

        //Pasar el objeto de la cita a edición
        administrarCitas.EditarCita({...citaObj});

        //Regresar el texto del boton a su estado original
        formulario.querySelector('button[type = "submit"]').textContent = 'Crear cita';

        //Quitar modo edición
        editando = false;
    } else {
        //Generar un id único
         citaObj.id = Date.now();

        //Creando una nueva cita....
        administrarCitas.AgregarCita({...citaObj});

        //Mensaje de agregado correctamente
        ui.ImprimirAlerta('Cita agregada correctamente');
    }

    //Reiniciando el objeto para la validación
    ReiniciarObjeto();

    //Reinicia el formulario
    formulario.reset();

    //Mostar el HTML de las citas
    ui.ImprimirCitas(administrarCitas);
}

function ReiniciarObjeto() {
    citaObj.mascota = '',
    citaObj.propietario = '',
    citaObj.telefono = '',
    citaObj.fecha = '',
    citaObj.hora = '',
    citaObj.sintomas = ''
}

function EliminarCita(id) {
    //Eliminar la cita
    administrarCitas.EliminarCita(id);
    //Muestre el mensaje
    ui.ImprimirAlerta('La cita se eliminó correctamente');
    //Refrescar las citas
    ui.ImprimirCitas(administrarCitas);
}

//Carga los datos y el modo edición
function CargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el objeto
    citaObj['mascota'] = mascota;
    citaObj['propietario'] = propietario;
    citaObj['telefono'] = telefono;
    citaObj['fecha'] = fecha;
    citaObj['hora'] = hora;
    citaObj['sintomas'] = sintomas;
    citaObj['id'] = id;
    
    
    //Cambiar el texto del boton
    formulario.querySelector('button[type = "submit"]').textContent = 'Guardar cambios';

    editando = true;
}