function oddNumber(num) {
    let oddN = [];
    for (let i = 0; i <= num.length - 1; i++) {
        if (num[i] % 2 != 0) {
            oddN.push(num[i])
        }
    }
    return oddN
}
num = [1, 2, 3, 4, 5]
console.log(oddNumber(num))