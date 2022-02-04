export default interface IReport {
    datosGenerales: Object;
    numberAccount: string,
    datosOperaciones: Map <string, number>;
    ShowReport(): Object;
}
