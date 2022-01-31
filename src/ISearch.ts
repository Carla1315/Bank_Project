export interface ISearch{
    searchByID(arraySearch: Array<number | string>[], 
        elementSearch: number | string): Array<number>;
    searchByNombre(arraySearch: Array<number | string>[], 
        elementSearch: number | string): Array<number>;
}
