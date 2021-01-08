const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

meses[0] = 'Nuevo Mes';
meses[7] = 'Último Mes';

console.table(meses);


/* A pesar de que un arreglo esta declarado como const
    sus elementos si se pueden modificar */