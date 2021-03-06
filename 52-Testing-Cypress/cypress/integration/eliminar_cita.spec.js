//Habilitar soporte al autocompletado
/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la elimina', () => {
    it('Campos nueva cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy = mascota-input]')
            .type('Hook');

        cy.get('[data-cy = propietario-input]')
            .type('Alexander');

        cy.get('[data-cy = telefono-input]')
            .type('33554285');

        cy.get('[data-cy = fecha-input]')
            .type('2021-05-06');     
            
        cy.get('[data-cy = hora-input]')
            .type('20:30'); 

        cy.get('[data-cy = sintomas-textarea]')
            .type('Solo duerme'); 

        cy.get('[data-cy = submit-cita]')
            .click();

        //Verificar el texto de las citas
        cy.get('[data-cy = "citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        //Seleccionar la alerta
        cy.get('[data-cy = "alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

         cy.get('[data-cy = "alerta"]')
            .should('have.class', 'alert-success')
    });

    it('Eliminar una cita', () => {
        cy.get('[data-cy = "btn-eliminar"]').click()

        cy.get('[data-cy = "citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
        
        //Seleccionar la alerta
        cy.get('[data-cy = "alerta"]')
        .invoke('text')
        .should('equal', 'Se eliminó Correctamente')

    })
});