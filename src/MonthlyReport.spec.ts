import { Customer } from "./Customer";
import { MonthlyReport } from "./MonthlyReport";
import * as clientes from './json_examples/Customer.json';

const clienteGeneral = new Customer (
    clientes[0].id.toString(), 
    clientes[0].name, 
    clientes[0].last_name, 
    clientes[0].address, 
    clientes[0].phone.toString(), 
    clientes[0].cellPhone.toString())

test('Final Balance', () => {
    var balance = Math.random();
    var interes = Math.random();
    var commision = Math.random();
    var operationData = new Map()
        operationData.set('balance', balance)
        operationData.set('interes', interes)
        operationData.set('comission', commision)
        const monthlyReport = new MonthlyReport(clienteGeneral, '12454646', operationData)
    expect(monthlyReport.showFinalBalance()).not.toBe('Wrong')
})

test('Final Balance Result', () => {
    var balance = Math.random();
    var interes = Math.random();
    var commision = Math.random();
    var operationData = new Map()
        operationData.set('balance', balance)
        operationData.set('interes', interes)
        operationData.set('comission', commision)
    const monthlyReport = new MonthlyReport(clienteGeneral, '12454646', operationData)
    const final_balance = balance + balance * interes / 100 - commision; 
    expect(monthlyReport.showFinalBalance()).toBe(final_balance.toString())
})