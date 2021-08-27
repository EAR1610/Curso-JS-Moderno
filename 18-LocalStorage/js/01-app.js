localStorage.setItem('nombre', 1);

const producto = {
    nombre : 'Monitor 24 Pulgadas',
    precio : 300,
}

const productoString = JSON.stringify( producto );
localStorage.setItem( 'producto', productoString );


const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify( meses );
localStorage.setItem('meses', mesesString);