class Bank {
    private _accounts:Array < Account >;
    private _customers:Array < Customer>;
    constructor(){
        this._accounts=[];
        this._customers=[];
    }
    public addAccounts(account:Account){
        this._accounts.push(account);
    }
    public get getAccounts():Array < Account >{ 
        return this._accounts;
    }
    public addCustomers(customers:Customer){
        this._customers.push(customers);
    }
    public get getCustomers():Array <Customer>{
        return this._customers;
    }
}
class Customer {
    private id:string;
    private nombre:string;
    private lastName:string;
    private cellPhone:string;
    private addresses:Address;
    private accounts:Array < Account >;
    constructor(id:string,nombre:string,lastName:string,cellPhone:string,addresses:Address){
        this.id= id;
        this.nombre = nombre;
        this.lastName = lastName;
        this.cellPhone = cellPhone;
        this.addresses=addresses;
        this.accounts=[];
    }
    
    public set setaccounts(accounts : Array < Account > ) {
        this.accounts = accounts;
    }
    
    public get getaccounts() : Array < Account > {
        return this.accounts;
    }

    public addaccounts(account : Account ) {
        this.accounts.push(account);
    }
    
    public set setid(id : string) {
        this.id = id;
    }

    public get getid() : string {
        return this.id;
    }

    public set setnombre(nombre : string) {
        this.nombre = nombre;
    }
    
    public get getnombre() : string {
        return this.nombre
    }
    
    public set setlastName(lastName : string) {
        this.lastName = lastName;
    }

    public get getlastName() : string {
        return this.lastName
    }
    
    public set setcellPhone(cellPhone : string) {
        this.cellPhone = cellPhone;
    }
    
    public get getcellPhone() : string {
        return this.cellPhone
    }
    
    public set setaddresses(addresses : Address) {
        this.addresses = addresses;
    }
    
    public get getaddresses(): Address {
        return this.addresses;
    }
    
}
class Address{
    private _id:string;
    private street:string;
    private number:string;
    private phone:string;
    constructor(id:string,street:string,number:string,phone:string){
        this._id=id;
        this.street=street;
        this.number=number;
        this.phone=phone;
    };
    public set setId (id : string) {
        this._id = id;
    }
    
    public get getid() : string {
        return this._id;
    }
    
    public set setstreet(street : string) {
        this.street = street;
    }
    
    public get getstreet() : string {
        return this.street;
    }
    
    public set setnumber(number : string) {
        this.number = number;
    }
    
    
    public get getnumber() : string {
        return this.number;
    }
    
    public set setphone(phone : string) {
        this.phone = phone;
    }
    
    
    public get getphone() : string {
        return this.phone;
    }
    
}
abstract class Account {
    private id:string;
    private _commission: number;
    private totalMoney: number;
    private _balance: number;
    private _pointAccounts: number;
    private customer:Customer| null;
    private _block:boolean;
    constructor(id:string,totalMoney: number,customer: Customer|null){
        this.id= id;
        this._commission=1.1;
        this.totalMoney= totalMoney;
        this._balance=this.totalMoney;
        this._pointAccounts=0;
        this.customer = customer;
        this._block=false;
    }
    
    public set setCommission(commission : number) {
        this._commission = commission;
    }
    
    public get getCommission() : number {
        return this._commission;
    }
    
    public set setCustomer(customer : Customer) {
        this.customer = customer;
    }
    
    public get getCustomer() : Customer| null {
        return this.customer;
    }
    
    public get getbalance() : number {
        this._balance=this.totalMoney;
        return this._balance;
    }
    
    abstract get getInteres():number;

    public set settotalMoney(totalMoney : number) {
        this.totalMoney = totalMoney;
    }
    
    public get gettotalMoney() : number {
        return  this.totalMoney;
    }
    
    public set setPointAccounts(pointAccounts : number) {
        this._pointAccounts = pointAccounts;
    }
    
    public get getPointAccounts() : number {
        return this._pointAccounts;
    }

    public set setblock(block : boolean) {
        this._block= block;
    }
    
    public get getblock() : boolean {
        return this._block;
    }
    

    checkAccountData(){
        if(this.customer!=null){
            return this.id+' '+this.customer.getid+' '+this.customer.getnombre+' '+this.customer.getlastName+' '+this.customer.getcellPhone+' '+this.customer.getaddresses.getstreet+' '+this.customer.getaddresses.getnumber+' '+this.customer.getaddresses.getphone+' saldo:'+ this.totalMoney;
        }else{
            return 'Esta cuenta no esta asociada a ningún cliente'
        }
    }
    enterMoney(money:number){
        this.totalMoney+=money;
        this._pointAccounts+=Math.floor(money/10);
        return 'Su saldo es: '+this.totalMoney+' sus puntos son: '+this._pointAccounts;
    }
    checkBalance(){
        console.log ('El balance es:'+this._balance);
    }
    changeClient(customer:Customer){
        this.customer=customer;
    }
}
class MonthlyReport{
    private _account:Account;
    constructor(account:Account) {
        this._account=account
    }
    ShowMonthlyReport () {
        const final_balance = this._account.getbalance+(this._account.gettotalMoney*this._account.getInteres/100)-this._account.getCommission;
        console.log(final_balance);
    }
}
class Current_Count extends Account{
    private _interes:number;
    constructor(id:string,totalMoney:number,customer:Customer| null){
        super (id,totalMoney,customer),
        this._interes=0.11;
    }
    showMessage(){
        if(this.getCustomer!=null)
            return 'Cuenta Corriente de '+this.getCustomer.getnombre;
    }
    get getInteres ():number{
        return this._interes;
    }
    public withdrawMoney(money:number):void{
        const limitWithdrawMoney=0;
        if(this.gettotalMoney-money>=limitWithdrawMoney){
            this.settotalMoney=this.gettotalMoney-money;
            console.log('Su saldo es: '+this.gettotalMoney);
        }else{
        console.log('Accion invalida. Su saldo es: '+this.gettotalMoney)}
    }
}
class Housing_Account extends Account{
    _interes;
    constructor(id:string,totalMoney:number,customer:Customer| null){
        super (id,totalMoney,customer),
        this._interes=0.22;
        this.setCommission=0;
    }
    showMessage(){
        if(this.getCustomer!=null)
            return 'Cuenta Housing Account de '+this.getCustomer.getnombre;
    }
    get getInteres ():number{
        return this._interes;
    }
    
    public get getCommission() : number {
        return 0;
    }
}
class Investment_Fund extends Account{
    _interes;
    constructor(id:string,totalMoney:number,customer:Customer| null){
        super (id,totalMoney,customer),
        this._interes=0.33;
    }
    get getInteres ():number{
        return this._interes;
    }
    public withdrawMoney(money:number):void{
        const limitWithdrawMoney=-600;
        if(this.gettotalMoney-money>=limitWithdrawMoney){
            this.settotalMoney=this.gettotalMoney-money;
            console.log('Su saldo es: '+this.gettotalMoney);
        }else{
            this.setblock=true;
            console.log('Accion invalida. Su saldo es: '+this.gettotalMoney)
        }
    }
}
//Clientes
const direccion = new Address('001','Av. Maestro', '544','62-45565');
const direccion2 = new Address('002','Calle Oruro', '45','62-85469');
const cliente = new Customer('1','Saly','Ramos','79453285',direccion);
const cliente2 = new Customer('1','Ruth','Ramirez','74521368',direccion2);
//Cuentas
const cuentaCliente = new Current_Count('0001',100,cliente);
const cuentaCliente2 = new Investment_Fund('0002',50,cliente);
const cuentaCliente3 = new Current_Count('0003',200,cliente2);
console.log(cuentaCliente3)
const cuentaCliente4 = new Housing_Account('0004',20,cliente2);
const cuentaSinCliente = new Current_Count('0005',100,null);
cliente.addaccounts(cuentaCliente);
cliente.addaccounts(cuentaCliente2);
cliente2.addaccounts(cuentaCliente3);
cliente2.addaccounts(cuentaCliente4);
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
console.log(banco);
//Check Account Data
console.log('- Check Account Data');
console.log(cuentaCliente.checkAccountData());
//Enter Money
console.log('- Enter Money: 55');
console.log(cuentaCliente.enterMoney(55));
//Withdraw Money
console.log('- Withdraw Money: 30');
cuentaCliente.withdrawMoney(30);
//Check Balance
console.log('- Check Balance');
cuentaCliente.checkBalance();
//Check Balance
console.log('- Change Client');
cuentaCliente3.changeClient(cliente);
console.log(cuentaCliente3);
//Monthly Report
console.log('- Monthly Report');
const ReporteMensual=new MonthlyReport(cuentaCliente);
console.log('balance:'+cuentaCliente.gettotalMoney+' interes:'+cuentaCliente.getInteres+' commision:'+cuentaCliente.getCommission)
ReporteMensual.ShowMonthlyReport(); 
const ReporteMensual2=new MonthlyReport(cuentaCliente4);
console.log('Cuenta HA balance:'+cuentaCliente4.gettotalMoney+' interes:'+cuentaCliente4.getInteres+' commision:'+cuentaCliente4.getCommission)
ReporteMensual2.ShowMonthlyReport(); 
//Modificar comision
console.log('- Modificar comision:')
cuentaCliente.setCommission=2,2;
console.log('commision:'+cuentaCliente.getCommission)
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
cuentaCliente3.withdrawMoney(250);
console.log('- IF')
console.log('from IF you can get up to 600$ of red numbers : -250')
cuentaCliente2.withdrawMoney(250);
console.log('from IF you can get up to 600$ of red numbers : -1000')
cuentaCliente2.withdrawMoney(1000);
console.log('Cuenta bloqueada')
console.log(cuentaCliente2.getblock)
console.log('- HA')
console.log('- HA cannot withdraw money')
//A bank has points account, each time 10$ is entered, one account point is added.
console.log('- getPointAccounts')
console.log(cuentaCliente.getPointAccounts)
//