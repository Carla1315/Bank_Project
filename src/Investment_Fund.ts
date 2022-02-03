import { Account } from "./Account";
import { Customer } from "./Customer";
import { IWithdrawMoney } from "./IWithdrawMoney";
import { MonthlyReportGral } from "./MonthlyReport";
export class Investment_Fund extends Account implements IWithdrawMoney{
    interes;
    limitWithdrawMoney: number;

    constructor(id: string, totalMoney: number, customer: Customer|null){
        super (id, totalMoney, customer),
        this.interes = 0.33;
        this.limitWithdrawMoney = -600;
    } 

    get getInteres(): number{
        return this.interes;
    }

    withdrawMoney(amount: number): boolean{
        const newTotalMoney = this.getTotalMoney - amount;

        if(newTotalMoney >= this.limitWithdrawMoney && this.setBlock == false){
            this.setTotalMoney = newTotalMoney;
            return true;
        }
        this.setBlock = true;
        console.log('Cuenta bloqueada')
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
