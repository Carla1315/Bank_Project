import { ISearch } from "./ISearch";

export class BinarySearch implements ISearch {
    constructor(){
    }
    search(arraySearch: Array<number|string>[], 
        leftPosition: number, 
        rightPosition: number, 
        elementSearch: number|string,
        tipo: number
    ): Array<number>
    {
        if (rightPosition >= leftPosition) {
            let middle = leftPosition + Math.floor((rightPosition - leftPosition) / 2);
     
            if (arraySearch[middle][tipo] == elementSearch){
                let index= [];
                index.push(middle);
                var indexSearchMore = middle + 1;
                while (arraySearch[indexSearchMore][tipo] == elementSearch) {
                    index.push(indexSearchMore);
                    indexSearchMore++;
                }
                return index;
            }
     
            if (arraySearch[middle][tipo] > elementSearch){
                return this.search(arraySearch, leftPosition, middle - 1, elementSearch,tipo);}
     
            return this.search(arraySearch, middle + 1, rightPosition, elementSearch,tipo);
        }
     
        return [];
    }
}
