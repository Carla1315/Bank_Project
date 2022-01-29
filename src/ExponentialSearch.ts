import { ISearch } from "./ISearch";

export class ExponentialSearch implements ISearch{
    index: (number)[];
    constructor(){
        this.index = [];
    }

    searchMoreRight(arraySearch: (string | number)[][], 
    puntero: number, 
    elementSearch: string | number,
    tipo: number){
        var indexSearchMore = puntero + 1;
        while (indexSearchMore <= arraySearch.length-1 && arraySearch[indexSearchMore][tipo] == elementSearch) {
            this.index.push(indexSearchMore);
            indexSearchMore++;
        }
    }

    searchMoreLeft(arraySearch: (string | number)[][], 
    puntero: number, 
    elementSearch: string | number,
    tipo: number){
        var indexSearchMore = puntero - 1;
        while (indexSearchMore >= 0 && arraySearch[indexSearchMore][tipo] == elementSearch) {
            this.index.push(indexSearchMore);
            indexSearchMore--;
        }
    }

    binarySearch(arraySearch: (string | number)[][], 
    leftPosition: number, 
    rightPosition: number, 
    elementSearch: string | number, 
    tipo: number): any
    {   
        if (rightPosition >= leftPosition)
        {
            let middle = leftPosition + Math.floor((rightPosition - leftPosition) / 2);
    
            if (arraySearch[middle][tipo] == elementSearch){
                this.index.push(middle);
                this.searchMoreLeft(arraySearch, middle, elementSearch, tipo);
                this.searchMoreRight(arraySearch, middle, elementSearch, tipo);
                return this.index;
            }
            if (arraySearch[middle][tipo] > elementSearch)
                return this.binarySearch(arraySearch, leftPosition, middle - 1, elementSearch,tipo);
            
            return this.binarySearch(arraySearch, middle + 1, rightPosition, elementSearch,tipo);
        }
        console.log(arraySearch[leftPosition][tipo])
        return [-1];
    }
    
    search(arraySearch: (string | number)[][], 
    leftPosition: number, 
    rightPosition: number, 
    elementSearch: string | number, 
    tipo: number) : any
    {
        if (arraySearch[0][tipo] == elementSearch){
            this.index.push(0);
            this.searchMoreRight(arraySearch, 0, elementSearch, tipo);
            return this.index;
        }

        if (arraySearch[rightPosition][tipo] == elementSearch){
            this.index.push(rightPosition);
            this.searchMoreLeft(arraySearch, rightPosition, elementSearch, tipo);
            return this.index;
        }
    
        let index = 1;
        while (index < rightPosition && arraySearch[index][tipo] <= elementSearch)
            index = index * 2;
    
        return this.binarySearch(arraySearch, index/2,
                        Math.min(index, rightPosition - 1), elementSearch,tipo);
    }
}