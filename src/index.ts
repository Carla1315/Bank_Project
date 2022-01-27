import { Bank } from "./Bank";
import { Customer } from "./Customer";
import { Current_Count } from "./Current_Count";
import { Housing_Account } from "./Housing_Account";
import { Investment_Fund } from "./Investment_Fund";

//Clientes
const cliente = new Customer('1','Saly','Ramos','Av. Maestro N°544','62-45565','79453285');
const cliente2 = new Customer('2','Ruth','Ramirez','Calle Oruro N°45','62-85469','74521368');
//Cuentas
const cuentaCliente = new Current_Count('0001',100,cliente);
const cuentaCliente2 = new Investment_Fund('0002',50,cliente);
const cuentaCliente3 = new Current_Count('0003',200,cliente2);
const cuentaCliente4 = new Housing_Account('0004',20,cliente2);
const cuentaSinCliente = new Current_Count('0005',100,null);
cliente.addAccounts(cuentaCliente);
cliente.addAccounts(cuentaCliente2);
cliente2.addAccounts(cuentaCliente3);
cliente2.addAccounts(cuentaCliente4);
//Banco
let banco=new Bank();
banco.addAccounts(cuentaCliente);
banco.addAccounts(cuentaCliente2);
banco.addAccounts(cuentaCliente3);
banco.addAccounts(cuentaCliente4);
banco.addAccounts(cuentaSinCliente);
banco.addCustomers(cliente);
banco.addCustomers(cliente2);

//Lista de cuentas y clientes
console.log('- Lista de cuentas y clientes');
banco.getAccounts.forEach(element => {
    console.log(
        element.getIdentificador + ' ' +
        (element.getCustomer != null ? element.getCustomer.getName: 'Sin Cliente'))
});
banco.getCustomers.forEach(element => {
    console.log(
        element.getId + ' ' +
        element.getName + ' ' +
        element.getLastName)
});
//Check Account Data
console.log('- Check Account Data');
let datosCuentaCliente=cuentaCliente.checkAccountData();
console.log(JSON.stringify(datosCuentaCliente))
//Enter Money
console.log('- Enter Money');
cuentaCliente.enterMoney(55);
console.log('Depositando 55 Saldo Actual: ' + cuentaCliente.getTotalMoney);
console.log('Puntos: '+cuentaCliente.getPointAccounts)
//Withdraw Money
console.log('- Withdraw Money: 30');
cuentaCliente.withdrawMoney(30);
console.log('Retirando 30 Saldo Actual: ' + cuentaCliente.getTotalMoney);
//Check Balance
console.log('- Check Balance');
cuentaCliente.checkBalance();
console.log('Balance: ' + cuentaCliente.getBalance);
//Change Client
console.log('- Change Client');
console.log(
    'Cliente: ' + cuentaCliente3.getCustomer?.getId 
    + ' ' + cuentaCliente3.getCustomer?.getName 
    + ' ' + cuentaCliente3.getCustomer?.getLastName
    + ' Numero de Cuenta: ' + cuentaCliente3.getIdentificador)
cuentaCliente3.changeClient(cliente);
console.log(
    'Cliente: ' + cuentaCliente3.getCustomer?.getId 
    + ' ' + cuentaCliente3.getCustomer?.getName 
    + ' ' + cuentaCliente3.getCustomer?.getLastName
    + ' Numero de Cuenta: ' + cuentaCliente3.getIdentificador)
//Monthly Report
console.log('- Monthly Report');
const ReporteMensual=cuentaCliente.reports();
console.log('balance:'+cuentaCliente.getTotalMoney+' interes:'+cuentaCliente.getInteres+' commision:'+cuentaCliente.getCommission)
console.log('Reporte Mensual: ' + JSON.stringify(ReporteMensual))
const ReporteMensual2=cuentaCliente4.reports();
console.log('Cuenta HA balance:'+cuentaCliente4.getTotalMoney+' interes:'+cuentaCliente4.getInteres)
console.log('Reporte Mensual: ' + JSON.stringify(ReporteMensual2))
//Modificar comision
console.log('- Modificar comision:')
console.log('commision:'+cuentaCliente4.getCommission)
cuentaCliente4.setCommission=2,2;
console.log('commision:'+cuentaCliente4.getCommission)
//Interest value
console.log('- Interest value:')
console.log('CC:'+cuentaCliente.getInteres)
console.log('IF:'+cuentaCliente2.getInteres)
console.log('HA:'+cuentaCliente4.getInteres)
//You cannot get more money from CC than there is
console.log('- CC')
console.log('You cannot get more money from CC than there is: -250')
console.log('¿Se logro retirar dinero? ' + cuentaCliente3.withdrawMoney(250));
console.log('- IF')
console.log('from IF you can get up to 600$ of red numbers : -250')
console.log('¿Se logro retirar dinero? '+ cuentaCliente2.withdrawMoney(250));
console.log('from IF you can get up to 600$ of red numbers : -1000')
console.log('¿Se logro retirar dinero? '+ cuentaCliente2.withdrawMoney(1000));
console.log('Cuenta bloqueada: ' + cuentaCliente2.getBlock)
console.log('- HA')
console.log('HA cannot withdraw money')
//A bank has points account, each time 10$ is entered, one account point is added.
console.log('- getPointAccounts')
console.log(cuentaCliente.getPointAccounts)
