import Customer from "../Customer"
import Housing_Account from "../Housing_Account";
import MonthlyReport from "../MonthlyReport";

describe('Interes', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685', '455655');
    const accountHelp = new Housing_Account(Math.random().toString(), 0, customerHelp);
    
    test('Is Interes 22%', () => {
        expect(accountHelp.getInteres).toBe(0.22);
    });

});

describe('Report Final Balance whithout Comission', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685', '455655');
    const accountHelp = new Housing_Account ('0004', 20, customerHelp);
    var operationData = new Map()
    operationData.set('balance', accountHelp.getBalance)
    operationData.set('interes', accountHelp.getInteres,)
    operationData.set('comission', accountHelp.getCommission)
    const monthlyReportHelp = new MonthlyReport (customerHelp, accountHelp.getIdentificador, operationData);

    test('Value', ()=>{    
        accountHelp.setCommission = 45;
        accountHelp.reports();
        var rightResp = (20 + 20 * 0.22 / 100)
        var rightRespEqual = JSON.stringify(rightResp)
        expect(monthlyReportHelp.showFinalBalance()).toEqual(rightRespEqual);
    })
});
