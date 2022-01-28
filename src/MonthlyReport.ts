import { IReport } from "./IReport";
export class MonthlyReportGral implements IReport{
    ShowReport(datos:any): Object {
        var final_balance;
        datos.commision!=undefined ?
            final_balance=datos.balance + (datos.totalMoney * datos.interes / 100) - datos.commission:
            final_balance=datos.balance + (datos.totalMoney * datos.interes / 100);
        return  [{'Account':{'accountNumber':datos.identificador}, 
                'operaciones':{'final_balance':final_balance}}];
    }
}
