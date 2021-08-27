const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si dos numeros son iguales
console.log(numero1 == numero3);    //false
console.log(numero1 == numero2);    //Return true

//Comparador estricto
console.log(numero1 === numero2);   //Return false
console.log(numero1 === parseInt(numero2)); //Return true

console.log(typeof numero1);
console.log(typeof numero2);


// Diferente a
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);    //Return true
console.log(numero1 != numero2);        //Return false
console.log(numero1 !== numero2);       //Return true
console.log(numero1 !== parseInt(numero2)); //Return false