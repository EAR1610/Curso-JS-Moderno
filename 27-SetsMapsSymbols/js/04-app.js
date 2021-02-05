const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto));     //Return true
console.log(weakmap.get(producto));     //Return Monitor
console.log(weakmap.delete(producto));    



/**
 * Size no funcina en el weakMap
 * solo aceptan objetos
 */