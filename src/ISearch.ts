export default interface ISearch{
    arraySearch: Array<number | string>[], 
    searchByID(elementSearch: number | string): Array<number|string>[];
    searchByNombre(elementSearch: number | string): Array<number|string>[];
}
