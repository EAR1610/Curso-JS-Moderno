const nav = document.querySelector('.navegacion');

//Registrar o esperar un evento
nav.addEventListener('click', () => {
    console.log('Click en nav');
})

//Cuando el mouse esta sobre un objeto
nav.addEventListener('mouseenter', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = 'white';
})

//Cuando el mouse sale de un objeto
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de nav');
    nav.style.backgroundColor = 'transparent';
})

//mousedown es similar al click
//click
//dbclick = doble click
//mouseup = cuando sueltas el mouse