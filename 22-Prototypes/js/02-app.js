function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Alexander = new Cliente('Alexader', 500);

function FormatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function FormatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log( FormatearCliente(Alexander) );



function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 5000, 'Cursos en línea');
console.log( FormatearEmpresa(CCJ) );