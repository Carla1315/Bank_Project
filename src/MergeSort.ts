import { ISort } from "./ISort";

export class MergeSort implements ISort{
    merge(unsortedArray: Array<number|string>[], 
        leftIndex: number, 
        mergedIndex: number, 
        rightIndex: number,
        tipo: number)
    {
        var lengTempArrayFirst = mergedIndex - leftIndex + 1;
        var lengTempArraySecond = rightIndex - mergedIndex;
    
        var tempArrayFirst = new Array<any>(lengTempArrayFirst); 
        var tempArraySecond = new Array<any>(lengTempArraySecond);
    
        for (var indexFirst = 0; indexFirst < lengTempArrayFirst; indexFirst++)
            tempArrayFirst[indexFirst] = unsortedArray[leftIndex + indexFirst];

        for (var indexSecond = 0; indexSecond < lengTempArraySecond; indexSecond++)
            tempArraySecond[indexSecond]= unsortedArray[mergedIndex + 1 + indexSecond];
        
        var indexFirst = 0;
        var indexSecond = 0;
        var indexMerged = leftIndex;
    
        while (indexFirst < lengTempArrayFirst && indexSecond < lengTempArraySecond) {
            if (tempArrayFirst[indexFirst][tipo] <= tempArraySecond[indexSecond][tipo] ) {
                unsortedArray[indexMerged] = tempArrayFirst[indexFirst];
                indexFirst++;
            }
            else {
                unsortedArray[indexMerged] = tempArraySecond[indexSecond];
                indexSecond++;
            }
            indexMerged++;
        }
    
        while (indexFirst < lengTempArrayFirst) {
            unsortedArray[indexMerged] = tempArrayFirst[indexFirst];
            indexFirst++;
            indexMerged++;
        }
    
        while (indexSecond < lengTempArraySecond) {
            unsortedArray[indexMerged] = tempArraySecond[indexSecond];
            indexSecond++;
            indexMerged++;
        }
    }
    
    sort(unsortedArray: Array<number|string>[], leftIndex: number, rightIndex: number, tipo:number){
        if(leftIndex >= rightIndex){
            return;
        }
        var mergedIndex = leftIndex +  Math.floor((rightIndex - leftIndex) / 2);
        this.sort (unsortedArray, leftIndex, mergedIndex, tipo);
        this.sort (unsortedArray, mergedIndex + 1, rightIndex, tipo);
        this.merge (unsortedArray, leftIndex, mergedIndex, rightIndex, tipo);
    }
}