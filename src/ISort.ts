export interface ISort{
    sort(unsortedArray: Array<number|string>[], 
        firstPosition: number, 
        lastPosition: number,
        tipo: number): void;
}
