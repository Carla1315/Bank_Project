import BinarySearch from "../BinarySearch"
import QuickSort from "../QuickSort";
describe('Search by ID and Nanme', () => {
    let listWithChanges = [['1236456', 'Ana'], ['9456213', 'Tomas'], 
                          ['5646541', 'Rita'], ['5654545', 'Andrea'], 
                          ['6546545', 'Vivian'], ['1235546', 'Tiana'], 
                          ['8978448', 'Laura']]
    const listWithoutChanges = [...listWithChanges]

    const quickSort = new QuickSort(listWithChanges);
    const binarySearch = new BinarySearch(listWithChanges);
    test('Search ID', () => {
        quickSort.sortByID();
        expect(binarySearch.searchByID('1235546')[0]).toEqual(listWithoutChanges[5]);
    });

    test('Search Name', () => {
        quickSort.sortByNombre();
        expect(binarySearch.searchByNombre('Vivian')[0]).toEqual(listWithoutChanges[4]);
    });
});
