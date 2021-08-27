import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tienesSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

nuevaFuncion();

console.log( nombreCliente ); 
console.log( ahorro );

console.log( mostrarInformacion ( nombreCliente, ahorro ) );
tienesSaldo(ahorro);

const cliente = new Cliente( nombreCliente, ahorro );
console.log( cliente ); 
console.log( cliente.mostrarInformacion() );

//Importar empresa
const empresa = new Empresa('Código con Juan', 500, 'Aprendizaje en línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());