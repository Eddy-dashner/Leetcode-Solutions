function sumnOfNaturalNumber(num) {
    sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum
}

console.log(sumnOfNaturalNumber(5))