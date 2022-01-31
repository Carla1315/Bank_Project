import { ISearch } from "./ISearch";

export class BinarySearch implements ISearch {
    binarySearch(arraySearch: Array<number|string>[], 
        leftPosition: number, 
        rightPosition: number, 
        elementSearch: number|string,
        positionElementSearch: number
    ): Array<number>
    {
        if (rightPosition >= leftPosition) {
            let middle = leftPosition + Math.floor((rightPosition - leftPosition) / 2);
     
            if (arraySearch[middle][positionElementSearch] == elementSearch){
                let index= [];
                index.push(middle);
                var indexSearchMore = middle + 1;
                while (arraySearch[indexSearchMore][positionElementSearch] == elementSearch) {
                    index.push(indexSearchMore);
                    indexSearchMore++;
                }
                return index;
            }
     
            if (arraySearch[middle][positionElementSearch] > elementSearch){
                return this.binarySearch(arraySearch, leftPosition, middle - 1, elementSearch,positionElementSearch);}
     
            return this.binarySearch(arraySearch, middle + 1, rightPosition, elementSearch,positionElementSearch);
        }
     
        return [];
    }
    searchByID(arraySearch: (string | number)[][], elementSearch: string | number): number[] {
        return this.binarySearch(arraySearch, 0, arraySearch.length, elementSearch, 0);
    }
    searchByNombre(arraySearch: (string | number)[][], elementSearch: string | number): number[] {
        return this.binarySearch(arraySearch, 0, arraySearch.length, elementSearch, 0);
    }
}
