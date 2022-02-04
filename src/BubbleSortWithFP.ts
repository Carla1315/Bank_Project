import ISort from "./ISort";

export default class BubbleSortWhithFP implements ISort{
    constructor(
        readonly unsortedArray: (string | number)[][]
    ){
        this.unsortedArray = unsortedArray;
    }

    bubbleSort(
        unsortedArray: (string | number)[][], 
        PositionElementSort: number
    ){
        let lengthunsortedArray = unsortedArray.length;
        let checked;
        do {
            checked = false;
            unsortedArray.forEach(function (element, index, array){
                if (index + 1 < lengthunsortedArray &&
                    element[PositionElementSort] > array[index + 1][PositionElementSort]) 
                {
                    unsortedArray[index] = unsortedArray.splice(index + 1, 1, unsortedArray[index])[0]
                    checked = true;
                }
            });
        } while (checked);
    }
    sortByID(): void {
        this.bubbleSort(this.unsortedArray, 0)
    }
    sortByNombre(): void {
        this.bubbleSort(this.unsortedArray, 1)
    }
}
