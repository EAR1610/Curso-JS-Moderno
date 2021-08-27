import { nuevoCliente, obtenerClientes } from './API.js';
import { mostrarAlerta, mostrarExito } from './funciones.js';

(function() {
    
    let emailDuplicado = false;
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    async function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const miCliente = {
            nombre,     
            email, 
            telefono,
            empresa
        }

        if( validar( miCliente ) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        const clientes = await obtenerClientes();

        clientes.forEach( cliente => {  
            const { email } = cliente;

            if ( miCliente.email === email ) {
                mostrarAlerta('El Email ya esta registrado');
                emailDuplicado = true;

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
                
                return;
            }
        })

        if ( !emailDuplicado ) {
            mostrarExito('El cliente se ha ingresado correctamente');
            await nuevoCliente( miCliente );
            window.location.href = 'index.html';
        }
        
    }

    function validar(obj) {
        return !Object.values(obj).every(element => element !== '');
    }

})();