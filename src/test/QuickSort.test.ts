import QuickSort from "../QuickSort"
describe('QuickSort by ID and Nanme', () => {
    let list = [['1236456', 'Ana'], ['9456213', 'Tomas'], 
                ['5646541', 'Rita'], ['5654545', 'Andrea'], 
                ['6546545', 'Vivian'], ['1235546', 'Tiana'], 
                ['8978448', 'Laura']]
    let listResult = [['1236456', 'Ana'], ['9456213', 'Tomas'], 
                        ['5646541', 'Rita'], ['5654545', 'Andrea'], 
                        ['6546545', 'Vivian'], ['1235546', 'Tiana'], 
                        ['8978448', 'Laura']]

    const quickSort = new QuickSort(list);
    test('Sort ID', () => {
        quickSort.sortByID();
        listResult.sort();
        expect(list).toStrictEqual(listResult);
    });

    test('Sort Name', () => {
        quickSort.sortByNombre();
        listResult.sort(function(a, b) {
            if (a[1] > b[1]) {
                return 1;
            }
            if (a[1] < b[1]) {
                return -1;
            }
                return 0;
            }
        );
        
        expect(list).toStrictEqual(listResult);
    });
});