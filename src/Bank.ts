import { Account } from "./Account";
import { Customer } from "./Customer";
export class Bank { 
    private accounts: Array<Account>;
    private customers: Array<Customer>;

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

    public addCustomers(customers: Customer){
        this.customers.push(customers);
    }
    
    public get getCustomers():Array <Customer>{
        return this.customers;
    }
}