//Promises
const aplicarDescuento = new Promise( ( resolve, reject ) => {

    const descuento = false;

   if ( descuento ) {
       resolve('Descuento aplicado');
   } else {
       reject('No se pudo aplicar el descuento');
   }
});

aplicarDescuento
    .then(resultado => descuento( resultado ) )
    //Siempre que el promise falle, tenemos acceso al .catch
    .catch( error => descuento( error ) )


//Hay 3 valores posibiles
//fulfilled - El promise se cumplió
//rejected - El promise no se cumplió
//pending - No se ha cumplido, ni tampoco rechazado

function descuento( mensaje ) {
    console.log(mensaje);
}