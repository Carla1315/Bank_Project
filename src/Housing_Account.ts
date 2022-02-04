import Account from "./Account";
import Customer from "./Customer";
export default class Housing_Account extends Account{
    interes;
    constructor(id: string, balance: number, customer: Customer){
        super (id, balance, customer),
        this.interes = 0.22;
        this.setCommission = 0;
    } 

    get getInteres(): number{
        return this.interes;
    }
    
}
