import { Account } from "./Account";
import { Customer } from "./Customer";
import { IWithdrawMoney } from "./IWithdrawMoney";
import { MonthlyReportGral } from "./MonthlyReport";
export class Current_Count extends Account implements IWithdrawMoney{
    private interes:number;
    limitWithdrawMoney: number;
 
    constructor(id: string,
        totalMoney: number, customer: Customer|null){
        super (id, totalMoney, customer),
        this.interes = 0.11;
        this.limitWithdrawMoney = 0;
    }

    get getInteres(): number{
        return this.interes;
    }

    withdrawMoney (amount: number): boolean{
        const newTotalMoney = this.getTotalMoney - amount;

        if(newTotalMoney >= this.limitWithdrawMoney){
            this.setTotalMoney = newTotalMoney;
            return true;
        }
        return false;
    }

    reports(): any {
        let importantDates = {
            'name': this.getCustomer?.getName + ' ' + this.getCustomer?.getLastName,
            'numberIdentification': this.getCustomer?.getId,
            'numberAccount': this.getIdentificador,
        }
        let dates = {
            'balance': this.getBalance,
            'totalMoney': this.getTotalMoney,
            'interes': this.getInteres,
            'comission': this.getCommission
        }
        const monthlyReport = new MonthlyReportGral(importantDates,dates)
        return monthlyReport.ShowReport();
    }
}
