//Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

CargarEventListeners();

function CargarEventListeners(){
    //Cuando agregas un curso presionando en 'Agregar al carrito'
    listaCursos.addEventListener('click', AgregarCurso);

    //Elimina un curso del carrito
    carrito.addEventListener('click', EliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        LimpiarHTML();
    })

}


//Funciones
function AgregarCurso( event ) {
    event.preventDefault(); //Evitamos que al dar click de scroll hacia arriba

    if ( event.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = event.target.parentElement.parentElement;
        LeerDatosCurso( cursoSeleccionado );
    }
}

//Elimina el curso del carrito
function EliminarCurso( event ) {
    
    if ( event.target.classList.contains('borrar-curso') ){
        const cursoId = event.target.getAttribute('data-id');
        
        articulosCarrito = articulosCarrito.filter( curso => {
            if ( curso.id === cursoId && curso.cantidad > 1 ) {
                return curso.cantidad--
            } else {
                return curso.id !== cursoId;
            }
        })

        CarritoHTML();
    }
}



//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function LeerDatosCurso( curso ) {
    
    //Crear un objeto con el contenido del curso
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1,
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

    if ( existe ) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if ( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso; //Retorna el elemento actual
            } else {
                return curso; //Retorna el elemento que no son los duplicados
            }
        });

        articulosCarrito = [...cursos];
    } else {

        //Agregar el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    CarritoHTML();
}

//Muestra el carrito de compras en el HTML

function CarritoHTML() {
    
    //Limpiar el HTML
    LimpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>
            <img src = "${imagen}" width="100">
            </td>

            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>

            <td>
                <a href="#" class="borrar-curso" data-id = "${id}"> X </a>
            </td>
        `;

        //Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild( row );
    })
}




//Elimina los cursos del tbody
function LimpiarHTML() {
    while ( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}