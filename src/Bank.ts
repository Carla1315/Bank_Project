import Account from "./Account";
import Customer from "./Customer";
export default class Bank { 
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
    
    public get getCustomers(): Array <Customer>{
        return this.customers;
    }
  
    public findCustomer (idCustomer: string): Customer  | undefined{
        return this.customers.find(customer => customer.getId === idCustomer)
    }

    public findAccount (numberAccount: string): Account | undefined{
        return this.accounts.find(account => account.getIdentificador === numberAccount)
    }
    
    changeClient(idCustomer: string, numberAccount: string){
        var accountFound = this.accounts.find(account => account.getIdentificador === numberAccount)
        var customerFound = this.customers.find(customer => customer.getId === idCustomer)
        if (accountFound != undefined && customerFound != undefined){
            accountFound.setCustomer = customerFound
            return true
        }
        return false;
    }
}
