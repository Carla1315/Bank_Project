import { Bank } from "./Bank";
import { Customer } from "./Customer";
import { Current_Count } from "./Current_Count";
import { Housing_Account } from "./Housing_Account";
import { Investment_Fund } from "./Investment_Fund";
import { QuickSort } from "./QuickSort";
import { BubbleSort } from "./BubbleSort";
import { BinarySearch } from "./BinarySearch";
import { LinearSearch } from "./LinearSearch";
import * as clientes from './json_examples/Customer.json';
import { Account } from "./Account";
import { BubbleSortWhithFP } from "./BubbleSortWithFP";
import { LinearSearchFP } from "./LinearSearchWithFP";

const banco = new Bank();
let listaGeneral : Array<string | number>[];
let listaPruebaQ : Array<string | number>[];
let listaPruebaB : Array<string | number>[];
let listaPruebaBFP : Array<string | number>[];
let listaPruebaBFP2 : Array<string | number>[];
function data(){
    var list = clientes;
    listaGeneral = [];
    listaPruebaQ = [];
    listaPruebaB = [];
    listaPruebaBFP = [];
    listaPruebaBFP2 = [];
    for (let index = 0; index < 100; index++) {
        const customerTemp = new Customer(
            list[index].id.toString(), 
            list[index].name, 
            list[index].last_name, 
            list[index].address, 
            list[index].phone.toString(), 
            list[index].cellPhone.toString());
        banco.addCustomers(customerTemp);
        const customerListPrueba = [
            list[index].id.toString(), 
            list[index].name, 
            list[index].last_name, 
            list[index].address, 
            list[index].phone.toString(), 
            list[index].cellPhone.toString()
        ];
        listaGeneral.push(customerListPrueba);
        listaPruebaQ.push(customerListPrueba);
        listaPruebaB.push(customerListPrueba);
        listaPruebaBFP.push(customerListPrueba);
        listaPruebaBFP2.push(customerListPrueba);
    }
}
function ListAccounts(list: Array<Account>){
    console.log('- Lista de cuentas');
    list.forEach(element => {
        console.log(
            element.getIdentificador + ' ' +
            (element.getCustomer != null ? element.getCustomer.getName: 'Sin Cliente'))
    });
}
function ListCustomers(list: Array<Customer>){
    console.log('- Lista de clientes');
    list.forEach(element => {
        console.log(
            element.getId + ' ' +
            element.getName + ' ' +
            element.getLastName + ' ' +
            element.getAddress + ' ' +
            element.getPhone + ' ' +
            element.getPhone)
    });
}
function ListNormal(list: Array<string | number>[]) {
    console.log('- Lista de clientes');
    list.forEach(element => {
        console.log(element[0] + ' ' + element[1] + ' ' + element[2]);
    });
}
function CheckAccountData(cuentaCliente: Account){
    cuentaCliente.checkAccountData()
                 .forEach(function(element){
                     console.log(element);
                 });
}
function EnterMoney(cuentaCliente: Account, money: number) {
    console.log('- Enter Money');
    cuentaCliente.enterMoney(money);
    console.log('Depositando ' + money + ' Saldo Actual: ' + cuentaCliente.getTotalMoney);
    console.log('Puntos: '+cuentaCliente.getPointAccounts)
}
function WithdrawMoney(cuentaCliente: Current_Count | Investment_Fund, money: number) {
    console.log('- Withdraw Money: 30');
    var isWithdrawMoney = cuentaCliente.withdrawMoney(money);
    if (isWithdrawMoney)
        console.log('Retirando ' + money + ' Saldo Actual: ' + cuentaCliente.getTotalMoney);
    else {
        console.log(money + ' Sobre-exede su saldo: ' + cuentaCliente.getTotalMoney);
    }
}
function CheckBalance(cuentaCliente: Account) {
    console.log('- Check Balance');
    cuentaCliente.checkBalance();
    console.log('Balance: ' + cuentaCliente.getBalance);
}
function ChangeClient(prevClient: Customer, nextClient: Customer, cuentaCliente: Account) {
    cuentaCliente.changeClient(nextClient);
    console.log(cuentaCliente.setCustomer);
}
function MonthlyReport(cuentaCliente: Account) {
    console.log('- Monthly Report');
    const ReporteMensual = cuentaCliente.reports();
    ReporteMensual.forEach(element => {
        console.log(element + ' ');
    });
}
function EditComision(cuentaCliente4: Account, newCommision: number) {
    console.log('- Modificar comision:')
    cuentaCliente4.setCommission=newCommision;
    console.log('commision:'+ cuentaCliente4.getCommission)
}
function PointsAccount(cuentaCliente: Account) {
    console.log('- getPointAccounts')
    console.log(cuentaCliente.getPointAccounts)
}
function SortId (lista: Array<string | number>[]) {
    const quickSort=new QuickSort(lista);
    quickSort.sortByID();
    ListNormal(lista);
    
}
function SortName(lista: Array<string | number>[]) {
    const quickSort=new QuickSort(lista);
    quickSort.sortByNombre();
    ListNormal(lista);
}
function SearchId(lista: Array<string | number>[], element: string | number) {
    const quickSort=new QuickSort(lista);
    quickSort.sortByID();
    var binarySearch = new BinarySearch(lista);
    var resultados = binarySearch.searchByID(element);
    ListNormal(resultados);
    
}
function SearchName(lista: Array<string | number>[], element: string | number) {
    const quickSort=new QuickSort(lista);
    quickSort.sortByNombre();
    var binarySearch = new BinarySearch(lista);
    var resultados = binarySearch.searchByNombre(element);
    ListNormal(resultados);
}
function InformSortAndSearch() {
    console.log('- Tiempo de Ordenado por: ')
    const bubbleSort = new BubbleSort(listaPruebaB);
    const quickSort = new QuickSort(listaPruebaQ);
    const lista = listaPruebaQ;

    console.time('QuickSort')
    quickSort.sortByID();
    console.timeEnd('QuickSort')

    console.time('BubbleSort')
    bubbleSort.sortByID();
    console.timeEnd('BubbleSort')
    
    const binarySearch = new BinarySearch(lista);
    const linearSearch = new LinearSearch(lista);
    console.log('- Tiempo de Busqueda por: ')
    console.time('BinarySearch')
    binarySearch.searchByID('9957548');
    console.timeEnd('BinarySearch')

    console.time('LinearSearch')
    linearSearch.searchByID('9957548');
    console.timeEnd('LinearSearch')
}

function InformSortAndSearchWithFP() {
    console.log('- Tiempo de Ordenado por: ')
    const bubbleSortWhithFP = new BubbleSortWhithFP(listaPruebaBFP);
    const bubbleSort = new BubbleSort(listaPruebaBFP2);
    const lista = listaPruebaQ;

    console.time('BubbleSortWhithFP')
    bubbleSortWhithFP.sortByID();
    console.timeEnd('BubbleSortWhithFP')
    
    console.time('BubbleSort')
    bubbleSort.sortByID();
    console.timeEnd('BubbleSort')

    const linearSearchFP = new LinearSearchFP(lista);
    const linearSearch = new LinearSearch(lista);
    console.log('- Tiempo de Busqueda por: ')
    console.time('LinearSearch')
    linearSearch.searchByID('9957548');
    console.timeEnd('LinearSearch')
    
    console.time('LinearSearchFP')
    linearSearchFP.searchByID('9957548');
    console.timeEnd('LinearSearchFP')
}

function main(){
    data();
    const clienteGeneral = new Customer (
        clientes[0].id.toString(), 
        clientes[0].name, 
        clientes[0].last_name, 
        clientes[0].address, 
        clientes[0].phone.toString(), 
        clientes[0].cellPhone.toString())
    const clienteCambio = new Customer (
        clientes[1].id.toString(), 
        clientes[1].name, 
        clientes[1].last_name, 
        clientes[1].address, 
        clientes[1].phone.toString(), 
        clientes[1].cellPhone.toString())
    //Cuentas
    const cuentaCC = new Current_Count('0001', 100, clienteGeneral);
    const cuentaIF = new Investment_Fund('0002', 50, clienteGeneral);
    const cuentaHA = new Housing_Account('0004', 20, clienteGeneral);
    //Banco
    banco.addAccounts(cuentaCC);
    banco.addAccounts(cuentaIF);
    banco.addAccounts(cuentaHA);
    //Menu
    var option = 12;
    switch (option) {
        case 1: ListAccounts(banco.getAccounts)
            break;
        case 2: ListCustomers(banco.getCustomers)
            break;
        case 3: CheckAccountData(cuentaCC);
            break;
        case 4: EnterMoney(cuentaCC, 55);
            break;
        case 5: WithdrawMoney(cuentaIF, 700);
            break;
        case 6: CheckBalance(cuentaCC);
            break;
        case 7: ChangeClient(clienteGeneral, clienteCambio, cuentaCC);
            break;
        case 8: MonthlyReport(cuentaHA);
            break;
        case 9: EditComision(cuentaCC, 2);
            break;
        case 10: PointsAccount(cuentaCC);
            break;
        case 11: SortId(listaGeneral);
            break;
        case 12: SortName(listaGeneral);
            break;
        case 13: SearchId(listaGeneral,'1656342');
            break;
        case 14: SearchName(listaGeneral,'Roma');
            break;
        case 15: InformSortAndSearch();
            break;
        case 16: InformSortAndSearchWithFP();
            break;
        default:
            break;
    }
}
main();
