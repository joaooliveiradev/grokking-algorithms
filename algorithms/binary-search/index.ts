const binarySearch = (arr: number[], item: number): number => {
    let firstItem: number = 0;
    let lastItem: number = arr.length - 1;
    let mid: number = 0;
    while (mid !== item) {
        mid = Math.floor((firstItem + lastItem) / 2);
        if (arr[mid] == item) {
            return mid;
        } else if (arr[mid] < item) {
            firstItem = mid + 1;
        } else {
            lastItem = mid - 1;
        }
    }
    return -1
}
export default binarySearch

