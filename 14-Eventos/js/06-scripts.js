//Evento Bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');


cardDiv.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Click en info');
});

tituloDiv.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Click en título');
});