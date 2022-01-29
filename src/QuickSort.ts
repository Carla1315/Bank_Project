import { ISort } from "./ISort";

export class QuickSort implements ISort{
    constructor() {}

    swap(unsortedArray: Array<number|string>[], punteroi: number, punteroj: number) {
        let temp = unsortedArray[punteroi];
        unsortedArray[punteroi] = unsortedArray[punteroj];
        unsortedArray[punteroj] = temp;
    }

    partition(unsortedArray: Array<number|string>[], low: number, high: number, tipo: number) {

        let pivot = unsortedArray[high][tipo];

        let punteroi = (low - 1);

        for (let punteroj = low; punteroj <= high - 1; punteroj++) {

            //cambiar para dec
            if (unsortedArray[punteroj][tipo] < pivot) {

                punteroi++;
                this.swap(unsortedArray, punteroi, punteroj);
            }
        }
        this.swap(unsortedArray, punteroi + 1, high);
        return (punteroi + 1);
    }

    sort(unsortedArray: Array<number|string>[], low: number, high: number, tipo: number) {
        if (low < high) {

            let pi = this.partition(unsortedArray, low, high,tipo);

            this.sort(unsortedArray, low, pi - 1,tipo);
            this.sort(unsortedArray, pi + 1, high,tipo);
        }
    }

}