//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}


//Devuelve un Array con las llaves
console.log(Object.keys( producto ));

//Devuelve un Array con los valores
console.log(Object.values( producto ));

//Devuelve en pares la información, osea une keys + values
console.log(Object.entries(producto));