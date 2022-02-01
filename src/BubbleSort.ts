import { ISort } from "./ISort";

export class BubbleSort implements ISort{
    constructor(
        readonly unsortedArray: (string | number)[][]
    ){
        this.unsortedArray = unsortedArray;
    }

    bubbleSort(unsortedArray: (string | number)[][]){
        let lengthunsortedArray = unsortedArray.length;
        let checked;
        do {
            checked = false;
            for (let puntero = 0; puntero < lengthunsortedArray; puntero++) {
                if (unsortedArray[puntero] > unsortedArray[puntero + 1]) {
                    let temporal = unsortedArray[puntero];
                    unsortedArray[puntero] = unsortedArray[puntero + 1];
                    unsortedArray[puntero + 1] = temporal;
                    checked = true;
                }
            }
        } while (checked);
    }
    sortByID(): void {
        this.bubbleSort(this.unsortedArray)
    }
    sortByNombre(): void {
        this.bubbleSort(this.unsortedArray)
    }
}
