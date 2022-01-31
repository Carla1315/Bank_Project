import { ISort } from "./ISort";

export class QuickSort implements ISort{
    constructor(
        readonly unsortedArray: (string | number)[][]
    ){
        this.unsortedArray = unsortedArray;
    }

    swap(unsortedArray: Array<number|string>[], punteroi: number, punteroj: number) {
        let temp = unsortedArray[punteroi];
        unsortedArray[punteroi] = unsortedArray[punteroj];
        unsortedArray[punteroj] = temp;
    }

    partition(unsortedArray: Array<number|string>[], leftIndex: number, rightIndex: number, PositionElementSort: number) {

        let pivot = unsortedArray[rightIndex][PositionElementSort];

        let punteroi = (leftIndex - 1);

        for (let punteroj = leftIndex; punteroj <= rightIndex - 1; punteroj++) {

            if (unsortedArray[punteroj][PositionElementSort] < pivot) {

                punteroi++;
                this.swap(unsortedArray, punteroi, punteroj);
            }
        }
        this.swap(unsortedArray, punteroi + 1, rightIndex);
        return (punteroi + 1);
    }

    quickSort(unsortedArray: Array<number|string>[], leftIndex: number, rightIndex: number, PositionElementSort: number) {
        if (leftIndex < rightIndex) {

            let pivot = this.partition(unsortedArray, leftIndex, rightIndex,PositionElementSort);

            this.quickSort(unsortedArray, leftIndex, pivot - 1,PositionElementSort);
            this.quickSort(unsortedArray, pivot + 1, rightIndex,PositionElementSort);
        }
    }
    sortByID(): void {
        this.quickSort(this.unsortedArray, 0, this.unsortedArray.length - 1, 0)
    }
    sortByNombre(): void {
        this.quickSort(this.unsortedArray, 0, this.unsortedArray.length - 1, 1)
    }
}
