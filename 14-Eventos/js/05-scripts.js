window.addEventListener('scroll', () => {
    

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();      //Nos dira en que lugar se encuentra un elemento

    if (ubicacion.top < 624) {
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aún no, da mas scroll');
    }
})