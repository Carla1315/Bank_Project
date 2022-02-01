import { ISearch } from "./ISearch";

export class BinarySearch implements ISearch {
    constructor(
        readonly arraySearch: (string | number)[][]
    ){
        this.arraySearch = arraySearch;
    }

    binarySearch(
        arraySearch: Array<number|string>[], 
        leftPosition: number, 
        rightPosition: number, 
        elementSearch: number|string,
        positionElementSearch: number
    ): Array<number|string>[]
    {
        if (rightPosition >= leftPosition) {
            let middle = leftPosition + Math.floor((rightPosition - leftPosition) / 2);
     
            if (arraySearch[middle][positionElementSearch] == elementSearch){
                let index= [];
                index.push(arraySearch[middle]);
                var indexSearchMore = middle + 1;
                while (indexSearchMore < arraySearch.length && 
                        arraySearch[indexSearchMore][positionElementSearch] == elementSearch
                ){
                    index.push(arraySearch[indexSearchMore]);
                    indexSearchMore++;
                }
                return index;
            }
     
            if (arraySearch[middle][positionElementSearch] > elementSearch){
                return this.binarySearch(
                    arraySearch, leftPosition, 
                    middle - 1, 
                    elementSearch,
                    positionElementSearch);
            }
            return this.binarySearch(
                arraySearch, 
                middle + 1, 
                rightPosition, 
                elementSearch,
                positionElementSearch);
        }
     
        return [];
    }
    searchByID(elementSearch: number|string): Array<number|string>[] {
        return this.binarySearch(this.arraySearch, 0, this.arraySearch.length - 1, elementSearch, 0);
    }
    searchByNombre(elementSearch: number|string): Array<number|string>[] {
        return this.binarySearch(this.arraySearch, 0, this.arraySearch.length - 1, elementSearch, 1);
    }
}
