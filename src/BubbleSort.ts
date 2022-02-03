import { ISort } from "./ISort";

export class BubbleSort implements ISort{
    constructor(
        readonly unsortedArray: (string | number)[][]
    ){
        this.unsortedArray = unsortedArray;
    }

    bubbleSort(unsortedArray: (string | number)[][], PositionElementSort: number){
        let lengthunsortedArray = unsortedArray.length;
        let checked;
        do {
            checked = false;
            for (let puntero = 0; puntero < lengthunsortedArray-1; puntero++) {
                if (unsortedArray[puntero][PositionElementSort] > unsortedArray[puntero + 1][PositionElementSort]) {
                    unsortedArray[puntero] = unsortedArray.splice(puntero + 1, 1, unsortedArray[puntero])[0]
                    checked = true;
                }
            }
        } while (checked);
    }
    sortByID(): void {
        this.bubbleSort(this.unsortedArray, 0)
    }
    sortByNombre(): void {
        this.bubbleSort(this.unsortedArray, 1)
    }
}
