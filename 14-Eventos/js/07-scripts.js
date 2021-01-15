const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', event => {
    /* console.log(event.target); */      //Identificamos a que le estamos dando click
    if (event.target.classList.contains('titulo')) {
        console.log('Diste click en título');
    }else if (event.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }else if (event.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
})