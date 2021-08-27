//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : false,
    mostrarInfo : function(){
        console.log(`El producto: ${this.nombre}, tiene un precio de: ${this.precio} y esta: ${this.disponible}`);
    }
}


const producto2 = {
    nombre : "Tablet",           //Propiedad o llave del objeto
    precio : 3000,
    disponible : true,
    mostrarInfo : function(){
        console.log(`El producto: ${this.nombre}, tiene un precio de: ${this.precio} y esta: ${this.disponible}`);
    }
}


producto.mostrarInfo();
producto2['mostrarInfo']();