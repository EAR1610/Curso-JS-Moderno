//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

const medidas = {
    peso : '1kg',
    medida : '1m',
}

console.log(producto);

console.log(medidas);

//Copiar dos objetos
const copia = Object.assign(producto, medidas);
console.log(copia);

//Spread Operator o Rest Operator
const copia2 = { ...producto, ...medidas};
console.log(copia2);