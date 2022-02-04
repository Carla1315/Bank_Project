import Account from "./Account";
import Customer from "./Customer";
import IWithdrawMoney from "./IWithdrawMoney";
export default class Investment_Fund extends Account implements IWithdrawMoney{
    interes;
    limitWithdrawMoney: number;
    constructor(id: string, balance: number, customer: Customer){
        super (id, balance, customer),
        this.interes = 0.33;
        this.limitWithdrawMoney = -600;
    } 

    get getInteres(): number{
        return this.interes;
    }

    withdrawMoney(amount: number): boolean{
        const newTotalMoney = this.getBalance - amount;
        if(newTotalMoney >= this.limitWithdrawMoney  && this.setBlock != true){
            this.setBalance = newTotalMoney;
            return true;
        }
        else{
            this.setBlock = true;
            console.log('Cuenta bloqueada')
            return false;
        }
    }
}
