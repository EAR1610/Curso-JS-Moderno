const ciudades = ['Londres', 'New York', 'Paris'];
const ordenes = new Set([123,231,125,102]);
const datos = new Map();

datos.set('nombre', 'Alexander');
datos.set('profesion', 'Desarrollador Web');

//Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}

//keys iterator
/* for(let keys of ciudades.keys() ) {
    console.log(keys);
}

for(let keys of ordenes.keys() ) {
    console.log(keys);
}

for(let keys of datos.keys() ) {
    console.log(keys);
} */

//values iterator
/* for(let value of ciudades.values() ) {
    console.log(value);
}

for(let value of ordenes.values() ) {
    console.log(value);
}

for(let value of datos.values() ) {
    console.log(value);
} */

//Entries iterator
/* for(let entry of ciudades.entries() ) {
    console.log(entry);
}

for(let entry of ordenes.entries() ) {
    console.log(entry);
}

for(let entry of datos.entries() ) {
    console.log(entry);
} */

/**
 * Important
 * Entries retorna tanto llave y valor en un arreglo
 * values retorna unicamente el valor
 * keys retorna unicamente la llave
 */