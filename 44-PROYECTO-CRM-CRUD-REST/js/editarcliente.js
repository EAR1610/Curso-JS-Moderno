import {obtenerCliente, editarCliente, obtenerClientes } from './API.js';
import { mostrarAlerta, mostrarExito } from './funciones.js';

(function() {

    let emailDuplicado = false;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        // Verificar si el cliente existe
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt( parametrosURL.get('id') );
        
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente( cliente );
       
        // registra el formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
       
    });

    function mostrarCliente( cliente ) {
        const { nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }


    async function validarCliente(e) {
        e.preventDefault();
        const miCliente = {
            nombre: nombreInput.value, 
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        if( validar( miCliente ) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        const clientes = await obtenerClientes();

        clientes.forEach( cliente => {  //Comprobamos si el Email existe en nuestra BBDD
            const { email } = cliente;

            if (miCliente.email === email) {
                mostrarAlerta('El Email ya esta registrado');
                emailDuplicado = true;
                window.location.href = 'index.html';
                return;
            }
        })

        if ( !emailDuplicado ) {
            mostrarExito('Se ha editado correctamente el cliente');
            await editarCliente( cliente );
            window.location.href = 'index.html';
        }
        
    }

    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }
})();