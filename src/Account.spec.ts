import { Current_Count } from "./Current_Count";
import { Customer } from "./Customer";
import * as clientes from './json_examples/Customer.json';

test('Enter Money', () => {
    const moneyInAccount = Math.random();
    const moneytoEnter = Math.random();
    const clienteGeneral = new Customer (
        clientes[0].id.toString(), 
        clientes[0].name, 
        clientes[0].last_name, 
        clientes[0].address, 
        clientes[0].phone.toString(), 
        clientes[0].cellPhone.toString())
    const account = new Current_Count(Math.random().toString(),moneyInAccount,clienteGeneral);
    expect(account.enterMoney(moneytoEnter)).toBe(moneyInAccount + moneytoEnter)
})