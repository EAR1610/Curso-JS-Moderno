//Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",           //Propiedad o llave del objeto
    precio : 300,
    disponible : true,
}

//Destructuring
const { nombre } = producto; 

console.log(nombre);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [ , , , , quinto ] = numeros;

console.log(quinto);

const [ primero, segundo, ...tercero] = numeros;
console.log(...tercero);


/*En el caso de los arreglos, yo decido el nombre en el destructuring
 Y en el caso de los objetos, debo de colocar nombres que existan, de lo contrario marcará undefined */