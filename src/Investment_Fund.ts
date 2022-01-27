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
        this.limitWithdrawMoney=-600;
    } 

    get getInteres(): number{
        return this.interes;
    }

    withdrawMoney(money: number): boolean{
        if(this.getTotalMoney-money>=this.limitWithdrawMoney){
            this.setTotalMoney=this.getTotalMoney-money;
            return true;
        }else{
            this.setBlock=true;
            return false;
        }
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