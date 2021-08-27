//Mediator

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta : ( articulo, precio ) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio ${precio}`);
    },
    vendido : comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta : ( cantidad, comprador ) => {
        console.log(`${ comprador.nombre } : ${ cantidad }`);
    }
}

function Subasta() {
    let compradores = { };

    return {
        registrar : usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear objetos

const alexander = new Comprador('Alexander');
const eddy = new Comprador('Eddy');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

//Registrar a las personas

subasta.registrar(alexander);
subasta.registrar(eddy);
subasta.registrar(vendedor);

//Inicio

vendedor.oferta('Mustan', 300);
alexander.oferta(350, alexander);
eddy.oferta(400, eddy);
alexander.oferta(500, alexander);
vendedor.vendido('Alexander');