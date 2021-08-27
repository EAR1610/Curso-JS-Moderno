const producto = 'Monitor 20 Pulgadas';

console.log(producto);      // Metodo Replace para reemplazar
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//Metodo Slice para cortar
console.log(producto.slice(0,10));
/* console.log(producto.slice(8)); */
console.log(producto.slice(2,1));


//Alternativa a Slice
console.log(producto.substr(0,10));
console.log(producto.substr(2,1));

const usuario = "Alexander";  //Obtener la primera letra de un nombre
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));