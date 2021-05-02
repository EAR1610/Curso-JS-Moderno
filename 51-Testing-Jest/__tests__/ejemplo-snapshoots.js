
const cliente = {
    nombre : 'Alexander Reynoso',
    balance : 500,
    tipo : 'Premium',
};

describe('Testing al cliente', () => {
    test('Es Alexander', () => {
        expect(cliente).toMatchSnapshot();
    })
})