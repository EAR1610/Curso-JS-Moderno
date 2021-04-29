//Module Pattern

const modulo1 = (function() {
    const nombre = 'Alexander';

    function hola() {
        console.log('Hola');
    }

    return {
        nombre,
        hola
    }
})();