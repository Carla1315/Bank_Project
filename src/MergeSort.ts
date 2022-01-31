import { ISort } from "./ISort";

export class MergeSort implements ISort{
    merge(unsortedArray: Array<number|string>[], 
        leftIndex: number, 
        mergedIndex: number, 
        rightIndex: number,
        positionElementSort: number)
    {
        var lengTempArrayFirst = mergedIndex - leftIndex + 1;
        var lengTempArraySecond = rightIndex - mergedIndex;
    
        var tempArrayFirst = new Array<any> (lengTempArrayFirst); 
        var tempArraySecond = new Array<any> (lengTempArraySecond);
    
        for (var indexFirst = 0; indexFirst < lengTempArrayFirst; indexFirst++)
            tempArrayFirst[indexFirst] = unsortedArray[leftIndex + indexFirst];

        for (var indexSecond = 0; indexSecond < lengTempArraySecond; indexSecond++)
            tempArraySecond[indexSecond]= unsortedArray[mergedIndex + 1 + indexSecond];
        
        var indexFirst = 0;
        var indexSecond = 0;
        var indexMerged = leftIndex;
    
        while (indexFirst < lengTempArrayFirst && indexSecond < lengTempArraySecond) {
            if (tempArrayFirst[indexFirst][positionElementSort] <= tempArraySecond[indexSecond][positionElementSort] ) {
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
    
    mainMerge(unsortedArray: Array<number|string>[], leftIndex: number, rightIndex: number, positionElementSort:number){
        if(leftIndex >= rightIndex){
            return;
        }
        var mergedIndex = leftIndex +  Math.floor((rightIndex - leftIndex) / 2);
        this.mainMerge (unsortedArray, leftIndex, mergedIndex, positionElementSort);
        this.mainMerge (unsortedArray, mergedIndex + 1, rightIndex, positionElementSort);
        this.merge (unsortedArray, leftIndex, mergedIndex, rightIndex, positionElementSort);
    }
    sortByID(unsortedArray: (string | number)[][]): void {
        this.mainMerge(unsortedArray, 0, unsortedArray.length - 1, 0)
    }
    sortByNombre(unsortedArray: (string | number)[][]): void {
        this.mainMerge(unsortedArray, 0, unsortedArray.length - 1, 1)
    }
}
