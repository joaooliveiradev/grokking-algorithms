import binarySearch from './index'

test('binarySearch([1,3,5,7,9], 3) should return 1', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 3)).toBe(1)
})

test('binarySearch([-5,-4,-3,-2,-1], -3) should return 3', () => {
    expect(binarySearch([-5, -4, -3, -2, -1], -3)).toBe(2)
})

test('binarySearch([10,20,30,40,50], 60) should return -1', () => {
    expect(binarySearch([10, 20, 30, 40, 50], 60)).toBe(-1)
})
