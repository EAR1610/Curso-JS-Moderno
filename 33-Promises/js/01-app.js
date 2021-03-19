const paises = ['Francia', 'Inglaterra', 'Portugal', 'Italia'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

nuevoPais('Alemania', mostrarPaises);