
//Uso de clousers

const obtenerCliente = () => {
    const nombre = 'Alexander';
    const apellido = 'Reynoso';

    function mostrarNombre() {
        console.log( nombre, apellido );
    }

    return mostrarNombre;
}

const cliente = obtenerCliente();
cliente();