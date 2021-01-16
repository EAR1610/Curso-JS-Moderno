//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

CargarEventListeners();
function CargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', AgregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', EliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //Reseteamos el arreglo

        LimpiarHTML();  //Eliminamos todo el HTML
    })
}



//Funciones
function AgregarCurso(event) {
    event.preventDefault(); //Evitamos que al dar click en el boton haga scroll para arriba

    if (event.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = event.target.parentElement.parentElement
        LeerDatosCurso(cursoSeleccionado);
    }
    
}


//Elimina el curso del carrito
function EliminarCurso(event) {
    if (event.target.classList.contains('borrar-curso')) {
        const cursoId = event.target.getAttribute('data-id');

        //Elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id  !== cursoId );

        CarritoHTML();  //Iterar sobre el carrito y mostrar su HTML
    }
}



//Lee el contenido del HTML al que le dimos click y estrae la información del curso
function LeerDatosCurso(curso) {
    /* console.log(curso); */

    //Crear un objeto con el contenido del curso
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1,
    }


    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if (existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {

            if ( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;   //Retorna el elemento actualizado

            }else{

                return curso;   //Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];

    }else {

        //Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);

    CarritoHTML();
}

//Muestra el carrito de compras en el HTML
function CarritoHTML() {

    // Limpiar el HTML
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

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}


//Elimina los cursos del tbody
function LimpiarHTML() {
    //Forma lenta
    /* contenedorCarrito.innerHTML = ''; */

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}