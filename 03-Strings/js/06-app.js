const producto = 'Monitor 20 Pulgadas';

//Metodo Repeat, te va a permitir repetir una cadena de texto

const texto = ' en Promoción'.repeat(3); //Se redondea, el numero debe de ser entero (ej: 2.6 = 2)

console.log(texto);
console.log(`${producto} ${texto}!!!`);

//Metodo Split, te va a permitir dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConAlex";
console.log(tweet.split("#"));