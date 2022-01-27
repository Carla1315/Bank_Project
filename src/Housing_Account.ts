import { Account } from "./Account";
import { Customer } from "./Customer";
import { MonthlyReportGral } from "./MonthlyReport";
export class Housing_Account extends Account{
    interes;
    constructor(id: string, totalMoney: number, customer: Customer|null){
        super (id, totalMoney, customer),
        this.interes = 0.22;
    } 

    get getInteres(): number{
        return this.interes;
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
            'interes': this.getInteres
        }
        const monthlyReport = new MonthlyReportGral(importantDates,dates)
        return monthlyReport.ShowReport();
    }
}