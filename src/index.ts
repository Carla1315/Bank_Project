import { Bank } from "./Bank";
import { Customer } from "./Customer";
import { Current_Count } from "./Current_Count";
import { Housing_Account } from "./Housing_Account";
import { Investment_Fund } from "./Investment_Fund";
import { QuickSort } from "./QuickSort";
import { MergeSort } from "./MergeSort";
import { BinarySearch } from "./BinarySearch";
import { LinearSearch } from "./LinearSearch";

/*-----------------Llenar Datos------------------*/
//Clientes
const cliente = new Customer('3265489', 'Saly', 'Ramos', 'Av. Maestro N°544', '62-45565', '79453285');
const cliente2 = new Customer('5234569', 'Ruth', 'Ramirez', 'Calle Oruro N°45', '62-85469', '74521368');
const cliente3 = new Customer('2532589', 'Amanda', 'Alvarez', 'Calle Oruro N°45', '62-85469', '74521368');
const cliente5 = new Customer('8546215', 'Pedro', 'Cardenas', 'Calle Oruro N°45', '62-85469', '74521368');
const cliente4 = new Customer('1265692', 'Carlos', 'Choque', 'Calle Oruro N°45', '62-85469', '74521368');
const cliente6 = new Customer('6542596', 'Pedro', 'Villa', 'Calle Oruro N°45', '62-85469', '74521368');
//Cuentas
const cuentaCliente = new Current_Count('0001', 100, cliente);
const cuentaCliente2 = new Investment_Fund('0002', 50, cliente);
const cuentaCliente3 = new Current_Count('0003', 200, cliente2);
const cuentaCliente4 = new Housing_Account('0004', 20, cliente2);
const cuentaSinCliente = new Current_Count('0005', 100, null);
//Banco
const banco=new Bank();
const banco2=new Bank();
const banco3=new Bank();
banco.addAccounts(cuentaCliente);
banco.addAccounts(cuentaCliente2);
banco.addAccounts(cuentaCliente3);
banco.addAccounts(cuentaCliente4);
banco.addAccounts(cuentaSinCliente);

banco.addCustomers(cliente);
banco.addCustomers(cliente2);
banco.addCustomers(cliente3);
banco.addCustomers(cliente4);
banco.addCustomers(cliente5);
banco.addCustomers(cliente6);

banco2.addCustomers(cliente);
banco2.addCustomers(cliente2);
banco2.addCustomers(cliente3);
banco2.addCustomers(cliente4);
banco2.addCustomers(cliente5);
banco2.addCustomers(cliente6);

banco3.addCustomers(cliente);
banco3.addCustomers(cliente2);
banco3.addCustomers(cliente3);
banco3.addCustomers(cliente4);
banco3.addCustomers(cliente5);
banco3.addCustomers(cliente6);
function features() {
    /*-----------------Features------------------*/
    //Lista de cuentas y clientes
    console.log('- Lista de cuentas y clientes');
    banco.getAccounts.forEach(element => {
        console.log(
            element.getIdentificador + ' ' +
            (element.getCustomer != null ? element.getCustomer.getName: 'Sin Cliente'))
    });
    banco.getCustomers.forEach(element => {
        console.log(element[0] + ' ' + element[1] + ' ' + element[2]);
    });
    //Check Account Data
    console.log('- Check Account Data');
    let datosCuentaCliente = cuentaCliente.checkAccountData();
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
    const ReporteMensual = cuentaCliente.reports();
    console.log('balance:'+ cuentaCliente.getTotalMoney+' interes:'+cuentaCliente.getInteres+' commision:'+cuentaCliente.getCommission)
    console.log('Reporte Mensual: ' + JSON.stringify(ReporteMensual))
    const ReporteMensual2 = cuentaCliente4.reports();
    console.log('Cuenta HA balance:'+ cuentaCliente4.getTotalMoney+' interes:'+ cuentaCliente4.getInteres)
    console.log('Reporte Mensual: ' + JSON.stringify(ReporteMensual2))
    //Modificar comision
    console.log('- Modificar comision:')
    console.log('commision:'+ cuentaCliente4.getCommission)
    cuentaCliente4.setCommission=2,2;
    console.log('commision:'+ cuentaCliente4.getCommission)
    //Interest value
    console.log('- Interest value:')
    console.log('CC:'+ cuentaCliente.getInteres)
    console.log('IF:'+ cuentaCliente2.getInteres)
    console.log('HA:'+ cuentaCliente4.getInteres)
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
}
/*--------------------Ordenar y Buscar--------------------*/
function listaOrdenadaPorQuick(){
    console.time('QuickSort')
    quickSort.sortByID(listaOrdenadaPorIdQuick);
    console.timeEnd('QuickSort')
}
function listaOrdenadaPorMerge(){
    console.time('MergeSort')
    mergeSort.sortByID(listaOrdenadaPorIdMerge);
    console.timeEnd('MergeSort')
}
console.log('--------------------Ordenar y Buscar--------------------')
console.log('- Tiempo de Ordenado por: ')
//Sort 
const quickSort=new QuickSort();
const mergeSort=new MergeSort();
let listaOrdenadaPorIdQuick = banco2.getCustomers;
let listaOrdenadaPorIdMerge = banco3.getCustomers;
listaOrdenadaPorMerge();
listaOrdenadaPorQuick();
//Search
const binarySearch=new BinarySearch();
const linearSearch=new LinearSearch();
console.log('- Tiempo de Busqueda por: ')
console.time('BinarySearch')
binarySearch.searchByID(listaOrdenadaPorIdQuick, '5234569');
console.timeEnd('BinarySearch')
console.time('LinearSearch')
linearSearch.searchByID(listaOrdenadaPorIdQuick, '5234569');
console.timeEnd('LinearSearch')
/*--------------------Features: Ordenar y Buscar--------------------*/
console.log('--------------------Features: Ordenar y Buscar--------------------')
let listaOrdenadaPorId = banco2.getCustomers; 
let listaOrdenadaPorNombre = banco3.getCustomers; 
quickSort.sortByID(listaOrdenadaPorId);
quickSort.sortByNombre(listaOrdenadaPorNombre);
//Lista de Clientes ordenadas
console.log('- Lista Ordenado por ID')
listaOrdenadaPorId.forEach(element => {
    console.log(element[0] + ' ' + element[1] + ' ' + element[2]);
});
console.log('- Lista Ordenado por Nombre')
listaOrdenadaPorNombre.forEach(element => {
    console.log(element[0] + ' ' + element[1] + ' ' + element[2]);
});
//Busqueda
console.log('- Busqueda por ID')
var resultados = binarySearch.searchByID(listaOrdenadaPorId, '5234569');
for (let index = 0; index < resultados.length; index++) {
    console.log(listaOrdenadaPorId[resultados[index]][0]+' '+
    listaOrdenadaPorId[resultados[index]][1]+' '+
    listaOrdenadaPorId[resultados[index]][2]);
}
console.log('- Busqueda por Nombre')
var resultados = binarySearch.searchByNombre(listaOrdenadaPorNombre, 'Pedro');
for (let index = 0; index < resultados.length; index++) {
    console.log(listaOrdenadaPorNombre[resultados[index]][0]+' '+
    listaOrdenadaPorNombre[resultados[index]][1]+' '+
    listaOrdenadaPorNombre[resultados[index]][2]);
}

