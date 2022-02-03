import { deflateSync } from "zlib";
import { Account } from "./Account";
import { Customer } from "./Customer";
import { MonthlyReportGral } from "./MonthlyReport";
export class Housing_Account extends Account{
    interes;
    constructor(id: string, totalMoney: number, customer: Customer){
        super (id, totalMoney, customer),
        this.interes = 0.22;
        this.setCommission = 0;
    } 

    get getInteres(): number{
        return this.interes;
    }
}
