
IniciarApp();

function IniciarApp() {
    console.log('Iniciando App...')

    SegundaFuncion();
}


function SegundaFuncion() {
    console.log('Desde la segunda función');

    UsuarioAutenticado('Alexander');
}

function UsuarioAutenticado(usuario) {
    console.log('Autenticando usuario.... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}