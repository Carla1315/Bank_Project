import { Account } from "./Account";
import { Customer } from "./Customer";
export class Bank { 
    private accounts: Array<Account>;
    private customers: Array <number | string>[];

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
        this.customers.push([
            customer.getId,
            customer.getName,
            customer.getLastName,
            customer.getAddress,
            customer.getPhone,
            customer.getCellPhone
        ]);
    }
    
    public set setCustomers(customers: Array <number | string>[]) {
        this.customers = customers;
    }
    
    public get getCustomers(): Array <number | string>[]{
        return this.customers;
    }
}
