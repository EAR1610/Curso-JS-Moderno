const cliente = new Map();

cliente.set('nombre', 'Elon');
cliente.set('tipo', 'Premium');
cliente.set('Saldo', '3000');
cliente.set(true, true);


console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre')); //Elon

cliente.delete('Saldo');
console.log(cliente.has('Saldo'));
console.log(cliente.get('Saldo'));

cliente.clear();
console.log(cliente);



const paciente = new Map( [ [ 'nombre', 'paciente' ], [ 'cuarto', 'no definido' ] ] );

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Ryan');

console.log(paciente);

paciente.forEach( datos => {
    console.log(datos);
} )


/**
 * Los maps, son listas ordenadas en llave y valor
 * si las llaves son iguales, reescribe el valor
 * los maps son iterables
 */