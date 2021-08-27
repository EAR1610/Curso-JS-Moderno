window.addEventListener('DOMContentLoaded', actualizarEstado);

function actualizarEstado() {   
    console.log('Probando la funcion');
    if (navigator.onLine) {
        console.log('Si estas conectado');
    } else {
        console.log('No estas conectado');
    }
}