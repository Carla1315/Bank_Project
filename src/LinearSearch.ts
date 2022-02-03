import { ISearch } from "./ISearch";

export class LinearSearch implements ISearch {
    constructor(
        readonly arraySearch: (string | number)[][]
    ){
        this.arraySearch = arraySearch;
    }

    linearSearch(
        arraySearch: (string | number)[][], 
        elementSearch: string | number,
        positionElementSearch: number): Array<number|string>[]
    {
        let index=[];
        
        for (var puntero = 0; puntero < arraySearch.length; puntero++)
            if (arraySearch[puntero][positionElementSearch] == elementSearch){
                index.push(arraySearch[puntero]);
                return index;
            }
        return [];
    }
    searchByID(elementSearch: number|string): Array<number|string>[] {
        return this.linearSearch(this.arraySearch, elementSearch, 0);
    }
    searchByNombre(elementSearch: number|string): Array<number|string>[] {
        return this.linearSearch(this.arraySearch, elementSearch, 1);
    }
}