let numero1 = "20";
let numero2 = "20.2";
let numero3 = "Uno";
let numero4 = 20;

console.log(typeof numero1);        //Retorna el tipo de variable

console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));  //No es un nùmero, retorna NAN


//Revisar si un nùmero es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
