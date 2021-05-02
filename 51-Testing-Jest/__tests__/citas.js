import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Alexander',
            telefono: '566655',
            fecha: '2/8/2001',
            hora:'12:50',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Alexander',
            telefono: '566655',
            fecha: '2/8/2001',
            hora:'12:50',
            sintomas: 'Solo duerme'
        };     
        
        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
      citas.eliminarCita(id);

      expect(citas).toMatchSnapshot();
    });
})