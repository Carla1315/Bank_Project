import { QuickSort } from "./QuickSort";
import * as orderByName from './json_examples/OrderByName.json';
import * as resultQuicksort from './json_examples/ResultQuicksort.json';

test('Quick sort by ID', () => {
    expect(resultQuicksort).toEqual(orderByName)
})