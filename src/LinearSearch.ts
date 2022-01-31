import { ISearch } from "./ISearch";

export class LinearSearch implements ISearch {
    linearSearch(
        arraySearch: (string | number)[][], 
        elementSearch: string | number,
        positionElementSearch: number)
    {
        let index=[];
        
        for (var puntero = 0; puntero < arraySearch.length; puntero++)
            if (arraySearch[puntero][positionElementSearch] == elementSearch)
                index.push(puntero);
        return index;
    }
    searchByID(arraySearch: (string | number)[][], elementSearch: string | number): number[] {
        return this.linearSearch(arraySearch, elementSearch, 0);
    }
    searchByNombre(arraySearch: (string | number)[][], elementSearch: string | number): number[] {
        return this.linearSearch(arraySearch, elementSearch, 1);
    }
}