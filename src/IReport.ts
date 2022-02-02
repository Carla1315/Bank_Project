export interface IReport {
    datosGenerales: Object;
    numberAccount: string,
    datosOperaciones: Map <string, number>;
    ShowReport(): Object;
}
