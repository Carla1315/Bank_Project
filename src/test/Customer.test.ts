import Customer from "../Customer"
describe('Get and Set Nombre', () => {
    const customerHelp = new Customer('1236456' ,'saly', 'fuertes', 'Av Satelite', '452685', '455655');
    test('is GetId', () => {
      expect(customerHelp.getId).toBe('1236456');
    });
    test('is SetId', () => {
      customerHelp.setId = '4636976';
      expect(customerHelp.getId).toBe('4636976');
    });
    test('is GetName', () => {
      expect(customerHelp.getName).toBe('saly');
    });
    test('is SetName', () => {
      customerHelp.setName = 'Brida';
      expect(customerHelp.getName).toBe('Brida');
    });
    test('is GetLasName', () => {
      expect(customerHelp.getLastName).toBe('fuertes');
    });
    test('is SetLastName', () => {
      customerHelp.setLastName = 'flores';
      expect(customerHelp.getLastName).toBe('flores');
    });
});
