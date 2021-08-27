//Callback hell
const paises = []; 

function nuevoPais( pais, callback ) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarpaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarpaises);
        setTimeout(() => {
            nuevoPais('Francia', mostrarpaises);
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarpaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();