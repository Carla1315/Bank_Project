import Account from "./Account";
import Customer from "./Customer";
import IWithdrawMoney from "./IWithdrawMoney";
export default class Current_Count extends Account implements IWithdrawMoney{
    private interes:number;
    limitWithdrawMoney: number;
 
    constructor(id: string,
        balance: number, customer: Customer){
        super (id, balance, customer),
        this.interes = 0.11;
        this.limitWithdrawMoney = 0;
    }

    get getInteres(): number{
        return this.interes;
    }

    withdrawMoney (amount: number): boolean{
        const newTotalMoney = this.getBalance - amount;

        if(newTotalMoney >= this.limitWithdrawMoney){
            this.setBalance = newTotalMoney;
            return true;
        }
        return false;
    }
}
