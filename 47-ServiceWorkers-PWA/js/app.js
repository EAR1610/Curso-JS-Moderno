if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log( 'Se instaló completamente', registrado) )
        .catch( error => console.log( "Fallo la instalación", error ) )
} else {
    console.log('ServiceWorkers no soportados');
}