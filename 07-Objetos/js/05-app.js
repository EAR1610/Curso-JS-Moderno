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
        }
    }
}

console.log(producto);

//Accediendo a la parte de pais
console.log(producto['informacion']['fabricacion']['pais']);
