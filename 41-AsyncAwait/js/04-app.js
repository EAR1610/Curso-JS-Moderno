function descargarNuevosClientes() {
    
    return new Promise( resolve => {
        console.log('Descargando Clientes.....');


        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    } )
}

function descargarNuevosPedidos() {
    
    return new Promise( resolve => {
        console.log('Descargando pedidos.....');


        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    } )
}

const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

app();