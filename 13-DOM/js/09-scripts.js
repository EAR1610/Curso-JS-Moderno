/* const primerEnlace = document.querySelector('a');
primerEnlace.remove;    //Eliminar un elemento
console.log(primerEnlace); */

//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);   //Identificar los hijos
navegacion.removeChild(navegacion.children[2]); //Eliminamos un hijo