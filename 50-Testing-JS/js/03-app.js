//Probar 2 valores

function suma(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

async function sumaAsync(a,b) {
    return Promise.resolve( suma(a,b) );
}

let resultado = suma(1,2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(10,5);
esperado = 5;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);

test('Suma 10 + 20 y el resultado debe de ser 30', async () => {

    const resultado = await sumaAsync(10,20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
    
})

async function test( mensaje, callback ) {

    try {

        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`);

    } catch (error) {

        console.error('Error:');
        console.error(error);
    }
}

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