import ISearch from "./ISearch";

export default class LinearSearchFP implements ISearch {
    constructor(
        readonly arraySearch: (string | number)[][]
    ){
        this.arraySearch = arraySearch;
    }

    linearSearch(
        arraySearch: (string | number)[][], 
        elementSearch: string | number,
        positionElementSearch: number): Array<number | string >[]
    {
        var result;
        arraySearch.forEach(function (element){
            if (element[positionElementSearch] === elementSearch) {
                result = element;
                return true;
            }
            return false;
        })
        result = result == undefined? []: result;
        return result;
    }
    searchByID(elementSearch: number|string): Array<number|string>[] {
        return this.linearSearch(this.arraySearch, elementSearch, 0);
    }
    searchByNombre(elementSearch: number|string): Array<number|string>[] {
        return this.linearSearch(this.arraySearch, elementSearch, 1);
    }
}