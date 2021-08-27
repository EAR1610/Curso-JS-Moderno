const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (event) => {
    if (event.target.value === '') {
        console.log('Fallo la validación'); //Para validar información
    }
    // console.log(event.target.value); 
})