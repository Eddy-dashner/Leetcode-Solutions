function sumAll(arr) {
    let min, max
    if (arr[1] > arr[0]) {
        max = arr[1];
        min = arr[0];
    } else {
        max = arr[0];
        min = arr[1];
    }
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}
console.log(sumAll([1, 4]))