import Customer from "../Customer"
import Investment_Fund from "../Investment_Fund";

describe('Interes', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685', '455655');
    const accountHelp = new Investment_Fund(Math.random().toString(), 0, customerHelp);
    
    test('Is Interes 33%', () => {
        expect(accountHelp.getInteres).toBe(0.33);
    });

});

describe('withdraw Money', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685', '455655');
    const accountHelp = new Investment_Fund('71236456-1565145', 1000, customerHelp);

    test('If withdraw Money is right', () => {
        const moneyToWithdraw = 100;
        expect(accountHelp.withdrawMoney(moneyToWithdraw)).toBeTruthy();
    });

    test('If withdrawMoney is red number but not less than -600 ', () => {
        const moneyToWithdraw = 1200;
        expect(accountHelp.withdrawMoney(moneyToWithdraw)).toBeTruthy();
        expect(accountHelp.getBalance).toBeGreaterThan(-600)
    });
  
    test('If withdraw Money is wrong: moneyToOut > MoneyInAccount', () => {
        const moneyToWithdraw = 2000;
        expect(accountHelp.withdrawMoney(moneyToWithdraw)).toBeFalsy();
        expect(accountHelp.getBlock).toBeTruthy();
    });
});
