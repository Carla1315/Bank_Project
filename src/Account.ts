import { Customer } from "./Customer";
export abstract class Account { 
    private identificador: string;
    private commission: number;
    private totalMoney: number;
    private balance: number;
    private pointAccounts: number;
    private customer: Customer|null;
    private block: boolean;

    constructor(id: string, totalMoney: number, customer: Customer|null){
        this.identificador = id;
        this.commission = 1.1;
        this.totalMoney = totalMoney;
        this.balance = this.totalMoney;
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

    public set setTotalMoney(totalMoney: number) {
        this.totalMoney = totalMoney;
    }
    
    public get getTotalMoney() : number {
        return  this.totalMoney;
    }
    
    public get getBalance(): number {
        this.balance = this.totalMoney;
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
    
    public get getCustomer(): Customer|null {
        return this.customer;
    }

    public set setBlock(block: boolean) {
        this.block = block;
    }
    
    public get getBlock(): boolean {
        return this.block;
    }

    checkAccountData(): Object{
        let datos = new Object();
        datos = {
            'customer': this.getCustomer?.getName + ' ' +
                    this.getCustomer?.getLastName, 
            'idCustomer' : this.getCustomer?.getId,
            'numberAccount': this.identificador,
            'saldo': this.totalMoney
        }
        return datos;
    }

    enterMoney(money: number): number{
        this.totalMoney += money;
        this.pointAccounts += Math.floor(money/10);
        return this.totalMoney;
    }

    checkBalance(): number{
        return this.balance;
    }

    changeClient(customer: Customer){
        this.customer=customer;
    }
    
    abstract reports():(any)[];
}