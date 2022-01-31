import { Account } from "./Account";
import { Customer } from "./Customer";
export class Bank { 
    private accounts: Array<Account>;
    private customers: Array <Customer>;

    constructor(){
        this.accounts = [];
        this.customers = [];
    }

    public addAccounts(account: Account){
        this.accounts.push(account);
    }
    
    public get getAccounts(): Array<Account>{ 
        return this.accounts;
    }

    public addCustomers(customer: Customer){
        this.customers.push(customer);
    }
    
    public set setCustomers(customers: Array <Customer>) {
        this.customers = customers;
    }
    
    public get getCustomers(): Array <Customer>{
        return this.customers;
    }
}
