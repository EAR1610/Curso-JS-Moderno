//WeakSet
const weakset = new WeakSet();

const cliente = {
    nombre : 'Alexander',
    saldo : 100,
}

weakset.add(cliente);

// console.log( weakset.has( cliente ) );  //Return true
// weakset.delete( cliente );


console.log(weakset);

/**
 * Important 
 * En el set, podemos pasar cualquier valor (objetos, numeros, booleanos etc)
 * en el weakSet solamente podemos pasar o agregar objetos
 * no contiene .size, no podemos conocer la extension del weakset
 * no son iterables...
 */