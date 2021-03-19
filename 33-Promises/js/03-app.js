//Promises
const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

   if (descuento) {
       resolve('Descuento aplicado');
   } else {
       reject('No se pudo aplicar el descuento');
   }
});

aplicarDescuento
    .then(resultado => descuento(resultado))
    //Siempre que el promise falle, tenemos acceso al .catch
    .catch(error => console.log(error) )


//Hay 3 valores posbiles
//fulfilled - El promise se cumplió
//rejected - El promise no se cumplió
//pending - nNo se ha cumplido, ni tampoco rechazado

function descuento(mensaje) {
    console.log(mensaje);
}