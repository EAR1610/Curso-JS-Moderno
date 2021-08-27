//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
    informacion : {
        medidas : {
            peso : '1kg',
            medida : '1m',
        },
        
        fabricacion : {
            pais : 'Guatemala',
            tipo : 'Empaquetado',
        },
    }
}

//Accediendo a información mediante el Destructuring

const { nombre, informacion : { fabricacion : { pais } }, informacion : { fabricacion : { tipo } }, informacion : {medidas : {medida}}, informacion : { medidas : {peso}} } = producto;

console.log(nombre);
console.log(pais);
console.log(medida);
console.log(peso);
console.log(tipo);