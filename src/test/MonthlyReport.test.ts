import Current_Count from "../Current_Count";
import Customer from "../Customer"
import MonthlyReport from "../MonthlyReport";


describe('Report Final Balance', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685','455655');
    const accountHelp = new Current_Count ('0004', 20, customerHelp);
    var operationData = new Map()
    operationData.set('balance', accountHelp.getBalance)
    operationData.set('interes', accountHelp.getInteres)
    operationData.set('comission', accountHelp.getCommission)

    test('Final Balance', ()=>{    
        const monthlyReportHelp = new MonthlyReport (customerHelp, accountHelp.getIdentificador, operationData);
        accountHelp.reports();
        var rightResp = (20 + 20 * 0.11 / 100 - 1.1)
        var rightRespEqual = JSON.stringify(rightResp)
        expect(monthlyReportHelp.showFinalBalance()).toEqual(rightRespEqual);
    })

    test('Final Balance: If some data is undefined', ()=>{   
        operationData.set('comission', undefined) 
        const monthlyReportHelp = new MonthlyReport (customerHelp, accountHelp.getIdentificador, operationData);
        expect(monthlyReportHelp.showFinalBalance()).toEqual('Wrong');
    })
});
describe('Report ShowReport', () => {
    const customerHelp = new Customer('1236456', 'saly', 'fuertes', 'Av Satelite', '452685','455655');
    const accountHelp = new Current_Count ('0004', 20, customerHelp);
    var operationData = new Map()
    operationData.set('balance', accountHelp.getBalance)
    operationData.set('interes', accountHelp.getInteres)
    operationData.set('comission', accountHelp.getCommission)

    test('If some data is undefined', ()=>{   
        operationData.set('comission', undefined) 
        const monthlyReportHelp = new MonthlyReport (customerHelp, accountHelp.getIdentificador, operationData);
        expect(monthlyReportHelp.ShowReport()).toBeDefined();
    })
});