import { Account } from "./Account";
import { Customer } from "./Customer";
import { IReport } from "./IReport";
export class MonthlyReportGral implements IReport{
    constructor( 
        readonly datosGenerales: Customer,
        readonly numberAccount: string,
        readonly datosOperaciones: Map <string, number>
    ){
        this.datosGenerales = datosGenerales
        this.numberAccount = numberAccount
        this.datosOperaciones = datosOperaciones
    }
    showFinalBalance(): String {
        var final_balance;
        var balance = this.datosOperaciones.get('balance');
        var interes =  this.datosOperaciones.get('interes');
        var comission = this.datosOperaciones.get('comission')
        balance != undefined && interes != undefined && comission != undefined ?
                    final_balance = balance + balance * interes / 100 - comission :
                    final_balance = 'Wrong'
        return final_balance.toString()
    }
    ShowReport(): String {
        return `
            Customer:        ${this.datosGenerales.getName} ${this.datosGenerales.getLastName}
            Identification:  ${this.datosGenerales.getId}
            Number Account:  ${this.numberAccount}
            Final Balance:   ${this.showFinalBalance()}`;
    }
}
