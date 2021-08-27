/**
 * Important
 * Traversing de DOM, se le denomina a la forma de movernos por los elementos de HTML
 */

 const navegacion = document.querySelector('.navegacion');
 console.log(navegacion.firstElementChild);
 console.log(navegacion.lastElementChild);

/*  //Accediendo a los enlaces 'nodos' en JavaScript
 console.log(navegacion.childNodes);    //Los espacios en blanco son considerados elementos
 console.log(navegacion.children);      //Va a listar elementos reales */

 /* console.log(navegacion.children[0].nodeName); //Obtener el primer elemento
 console.log(navegacion.children[0].nodeType); */

const card = document.querySelector('.card');

/* //Modificando un titulo
card.children[1].children[1].textContent = 'Nuevo Heading desde el traversing de DOM';

//Modificando la imagen
card.children[0].src = 'img/hacer2.jpg';
console.log(card.children[1].children[1].textContent); */


//Traversing de hijo al padre
/* console.log(card.parentElement.parentElement.parentElement);//entre mas parentElement se coloque, irá escalando mas arriba. */

//Accediendo a los hermanos
/* console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);



const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
//Elementos previos
console.log(ultimoCard.previousElementSibling); */