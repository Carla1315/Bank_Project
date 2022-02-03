import { Customer } from "./Customer";
import { MonthlyReportGral } from "./MonthlyReport";
export abstract class Account { 
    private identificador: string;
    private commission: number;
    private balance: number;
    private pointAccounts: number;
    private customer: Customer;
    private block: boolean;

    constructor(id: string, balance: number, customer: Customer){
        this.identificador = id;
        this.commission = 1.1;
        this.balance = balance;
        this.pointAccounts = 0;
        this.customer = customer;
        this.block = false;
    }

    abstract get getInteres(): number;
    
    public set setIdentificador(identificador : string) {
        this.identificador = identificador;
    }
    
    public get getIdentificador() : string {
        return  this.identificador;
    }
    

    public set setCommission(commission: number) {
        this.commission = commission;
    }
    
    public get getCommission(): number {
        return this.commission;
    }
    
    public set setBalance(balance: number) {
        this.balance = balance;
    }

    public get getBalance(): number {
        return this.balance;
    }

    public set setPointAccounts(pointAccounts: number) {
        this.pointAccounts = pointAccounts;
    }
    
    public get getPointAccounts(): number {
        return this.pointAccounts;
    }

    public set setCustomer(customer: Customer) {
        this.customer = customer;
    }
    
    public get getCustomer(): Customer {
        return this.customer;
    }

    public set setBlock(block: boolean) {
        this.block = block;
    }
    
    public get getBlock(): boolean {
        return this.block;
    }

    enterMoney(money: number): number{
        this.balance += money;
        this.pointAccounts += Math.floor(money / 10);
        return this.balance;
    }

    checkBalance(): number{
        return this.balance;
    }

    checkAccountData(): string{
        var accountData = `
            Customer: ${this.getCustomer?.getName} ${this.getCustomer?.getLastName}
            Identification:  ${this.getCustomer?.getId}
            Number Account: ${this.identificador}
            Saldo: ${this.balance}`;
        
        return accountData;
    }
    
    reports(): String {
        var operationData = new Map()
        operationData.set('balance', this.getBalance)
        operationData.set('interes', this.getInteres,)
        operationData.set('comission', this.getCommission)
        const monthlyReport = new MonthlyReportGral(this.customer, this.identificador, operationData)
        return monthlyReport.ShowReport();
    }
}
