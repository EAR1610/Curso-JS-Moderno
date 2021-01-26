//Object Literal, es mas común pero no permite crear objetos dinámicos ni reutilizables
const cliente = {
    nombre : 'Alexander',
    saldo : 500,
}

console.log(cliente);
console.log(typeof cliente);


//Menos común, pero si permite crear objetos dinamicos y reutilizables
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Alexander = new Cliente('Alexader', 500);

console.log(Alexander);