import Current_Count from "./Current_Count";
import Customer from "./Customer"
describe('Interes', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685', '455655');
    const accountHelp = new Current_Count(Math.random().toString(), 0, customerHelp);
    
    test('Is Interes 11%', () => {
        expect(accountHelp.getInteres).toBe(0.11);
    });

});

describe('withdraw Money', () => {
    const customerHelp = new Customer('1236456','saly','fuertes','Av Satelite', '452685','455655');
    const accountHelp = new Current_Count('71236456-1565145', 1235, customerHelp);

    test('If withdraw Money is right: moneyToOut < MoneyInAccount', () => {
        const moneyToWithdraw = 100;
        expect(accountHelp.withdrawMoney(moneyToWithdraw)).toBeTruthy();
    });
  
    test('If withdraw Money is wrong: moneyToOut > MoneyInAccount', () => {
        const moneyToWithdraw = 2000;
        expect(accountHelp.withdrawMoney(moneyToWithdraw)).toBeFalsy();
    });
});