import { Account } from "./Account";
import { Customer } from "./Customer";
import { IWithdrawMoney } from "./IWithdrawMoney";
import { MonthlyReportGral } from "./MonthlyReport";
export class Investment_Fund extends Account implements IWithdrawMoney{
    interes;
    limitWithdrawMoney: number;

    constructor(id: string, totalMoney: number, customer: Customer){
        super (id, totalMoney, customer),
        this.interes = 0.33;
        this.limitWithdrawMoney = -600;
    } 

    get getInteres(): number{
        return this.interes;
    }

    withdrawMoney(amount: number): boolean{
        const newTotalMoney = this.getBalance - amount;

        if(newTotalMoney >= this.limitWithdrawMoney && this.setBlock == false){
            this.setBalance = newTotalMoney;
            return true;
        }
        this.setBlock = true;
        console.log('Cuenta bloqueada')
        return false;
    }
}
