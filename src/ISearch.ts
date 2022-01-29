export interface ISearch{
    search(arraySearch: Array<number|string>[], 
        leftPosition: number, 
        rightPosition: number, 
        elementSearch: number|string,
        tipo: number): Array<number>;
}
