//Probar 2 valores

function suma(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(1,2);
let esperado = 3;   //El valor esperado esta correctamente implementado

expected( esperado ).toBe( resultado );

resultado = restar(10,5);
esperado = 5;

expected( esperado ).toBe( resultado );

expected( esperado ).toEqual( resultado) ;

function expected( esperado ) {
    return {
        toBe( resultado ) {

            if ( resultado !== esperado ) {
                console.error(`El resultado ${resultado} es diferente a lo esperado; la prueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        },
        toEqual( resultado ) {
            if ( resultado !== esperado ) {
                console.error(`El resultado ${resultado} no es igual al esperado, la prueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }           
        }
    }
}