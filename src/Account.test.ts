import Current_Count from "./Current_Count" ;
import Customer from "./Customer"
import MonthlyReport from "./MonthlyReport";

jest.mock('./MonthlyReport');
const monthlyReport = MonthlyReport as jest.MockedClass<typeof MonthlyReport>;

beforeEach(() => {
    monthlyReport.mockClear();
});

describe('Enter Money', () => {
    const customerHelp = new Customer('1236456','saly','fuertes','Av Satelite', '452685','455655');
    const accountHelp = new Current_Count(Math.random().toString(),0,customerHelp);
    const moneyInAccount = Math.random();
    const moneytoEnter = Math.random();
    accountHelp.setBalance = moneyInAccount;
    test('Enter Money', () => {
        const enterMoney = accountHelp.enterMoney(moneytoEnter);
        expect(enterMoney).toEqual(moneyInAccount + moneytoEnter)
    });
});

describe('Point Accounts', () => {
    test('Adition Point Accounts', () => {
        const mockCallback = jest.fn(points => Math.floor(10.5 / 10) + points);
        forEach([0, 1, 2], mockCallback);
        expect(mockCallback.mock.results[1].value).toBe(2);
    })
    function forEach(items: number[], callback: jest.Mock<any, [x: any]>) {
        for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }
});

describe('Checket Account', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685','455655');
    const accountHelp = new Current_Count(Math.random().toString(), 0, customerHelp);
    test('Checket Account return String', ()=>{
        expect(accountHelp.checkAccountData()).toEqual(expect.anything())
    })
});

describe('Reports', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685','455655');
    const accountHelp = new Current_Count(Math.random().toString(), 0, customerHelp);
    test('Checket account call Report', ()=>{    
        accountHelp.reports();
        expect(monthlyReport).toHaveBeenCalledTimes(1);
    })

    test('Value', ()=>{    
        accountHelp.reports();
        console.log(monthlyReport.mock.calls);
    })

});