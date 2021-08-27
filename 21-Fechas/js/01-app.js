const diaHoy = new Date(); //Detallado

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); //Enero lo toma como 0, importante....
valor = diaHoy.getMinutes();
valor = diaHoy.getTime();


console.log(valor);