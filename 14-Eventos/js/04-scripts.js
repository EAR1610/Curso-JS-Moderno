const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', ValidarFormulario);


function ValidarFormulario(event) {
    event.preventDefault(); //Prevenir la accion por default de un elemento

    console.log('Consultar una API.....')

    console.log(event.target.method);
}