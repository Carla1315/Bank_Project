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
        let datos = new Object();
        datos = {
            'identificador': this.getIdentificador,
            'balance': this.getBalance,
            'totalMoney': this.getTotalMoney,
            'interes': this.getInteres,
            'comission': undefined
        }
        const monthlyReport = new MonthlyReportGral()
        return monthlyReport.ShowReport(datos);
    }
}