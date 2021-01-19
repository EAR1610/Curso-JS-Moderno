//Varibales
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Varibles para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

EventListeners()
function EventListeners() {
    //Cuando la App inicia
    document.addEventListener('DOMContentLoaded', IniciarApp);

    //Campos del formulario
    email.addEventListener('blur', ValidarFormulario);
    asunto.addEventListener('blur', ValidarFormulario);
    mensaje.addEventListener('blur', ValidarFormulario);

    //Reinicia el formulario
    btnReset.addEventListener('click', ResetearFormulario);

    //Enviar Email
    formulario.addEventListener('submit', EnviarEmail);
}


//Funciones
function IniciarApp() {
    //Desabilitamos el boton para enviar el Email
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el formulario
function ValidarFormulario(e) {
    
    if (e.target.value.length > 0) {
        //Elimina los errores...
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        MostarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        
        if ( er.test( e.target.value ) ) {
            //Elimina los errores...
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            MostarError('Email no válido');
        }
    }


    if ( er.test( email.value )  && asunto.value !== '' && mensaje.value !== ''  ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 
}

//Funcion que resetea el formulario
function ResetearFormulario(e) {
    formulario.reset();
    e.preventDefault();
}

function MostarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500','p-3','mt-5',
    'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if ( errores.length === 0 ) {
        formulario.appendChild(mensajeError);
    }

}

//Envia el Email
function EnviarEmail(e) {
    e.preventDefault();

    //Mostrar el spiner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despues de 3 seg ocultar el spinner y mostrar el mensaje
    setTimeout( () => {
        spinner.style.display = 'none';


        //Mensaje que indica que se envio correctamente el Email
        const parrafo = document.createElement('P');
        parrafo.textContent = 'El Email se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        //Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
        
        setTimeout(() => {
            parrafo.remove();   //Eliminar el mensaje de éxito

            ResetearFormulario();
        }, 5000);

    }, 3000 );
}


