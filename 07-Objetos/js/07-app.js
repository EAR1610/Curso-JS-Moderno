//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

producto['disponible'] = false;

delete producto['precio'];

console.log(producto);

/*      Las constantes no se pueden reescribir, pero las llaves de un objeto Sí,
        incluso si el objeto es const          */ 