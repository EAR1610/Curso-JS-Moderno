const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

//Unir arreglos con .concat
const unirMeses = meses.concat(meses2, meses3);
console.log(unirMeses);

//Unir arreglos con spread operator
const mesesCompletos = [...meses, ...meses2, ...meses3];
console.log(mesesCompletos);