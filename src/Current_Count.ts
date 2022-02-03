import { Account } from "./Account";
import { Customer } from "./Customer";
import { IWithdrawMoney } from "./IWithdrawMoney";
import { MonthlyReportGral } from "./MonthlyReport";
export class Current_Count extends Account implements IWithdrawMoney{
    private interes:number;
    limitWithdrawMoney: number;
 
    constructor(id: string,
        totalMoney: number, customer: Customer){
        super (id, totalMoney, customer),
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
