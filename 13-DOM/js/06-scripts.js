const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


//Obtener el texto en JavaScript
/* console.log(encabezado.innerText);  //No extraera un texto que esta oculto con visibility: hidden
console.log(encabezado.textContent);//TextContent si lo extrae
console.log(encabezado.innerHTML);  //Se trae el html */

//Modificando el encabezado
/* const nuevoHeading = 'Nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading; */


//Modificar una imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
