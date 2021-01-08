//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

//Agregar nuevas propiedades al objeto

producto.imagen = 'imagen.jpg';

//Eliminar propiedades del objeto

delete producto.disponible;
delete producto['precio'];

console.log(producto);