const cliente = {
    nombre : 'Alexander Reynoso',
    balance : 500,
};

describe('Testing al cliente', () => {
    test('El cliente es Premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Alexander Reynoso', () => {
        expect(cliente.nombre).toBe('Alexander Reynoso');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400)
    });
})