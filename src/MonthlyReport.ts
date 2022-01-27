import { IReport } from "./IReport";
export class MonthlyReportGral implements IReport{
    operaciones:Object;

    constructor( 
        readonly datosGenerales: Object,
        readonly datosOperaciones: any
    ){
        this.operaciones= [];
    }
    ShowReport(): Object {
        var final_balance;
        var commision = this.datosOperaciones.commision != undefined ? this.datosOperaciones.commision : 0;
        final_balance = this.datosOperaciones.balance + 
                        (this.datosOperaciones.totalMoney * this.datosOperaciones.interes / 100) - commision;
        this.operaciones= {'final_balance': final_balance}
        return  [{'Important Dates':this.datosGenerales,
                'Review': this.datosOperaciones,
                'Operaciones': this.operaciones}];
    }
}
