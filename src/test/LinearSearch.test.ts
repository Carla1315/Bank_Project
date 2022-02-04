import LinearSearch from "../LinearSearch";

describe('Search LinearSearch', () => {
    let list = ['1236456', '4162368', '5646541', '5654545', '6546545', '6587848', '8978448']

    test('Sort', () => {
        const mockCallback = jest.fn( poincats => poincats + ' Martha');
        Search(mockCallback, list, '6587848');
        expect(mockCallback.mock.results[0].value).toBe('6587848 Martha');
        expect(mockCallback.mock.calls.length).toBe(1);
    })
    function Search(
        callback: jest.Mock<any, [x: any]>, 
        list: Array <string | number>,
        elementSearch: string | number) {
        for (var puntero = 0; puntero < list.length; puntero++)
            if (list[puntero] == elementSearch){
                callback(list[puntero]);
                return;
            }
    }
});