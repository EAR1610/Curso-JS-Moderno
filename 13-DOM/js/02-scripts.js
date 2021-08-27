//Seleccionar elementos por su clase
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si una clase no existe. Retorna un htmlCollection vacio
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);