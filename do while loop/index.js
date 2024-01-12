/*
Question: count the number of digits of a number
example : 435678 = 6
43567 
4356
435
43
4
0
*/

function countDigits(num) {
    num = Math.abs(num);
    let count = 0;

    do {
        count++
        num = Math.floor(num / 10)
    } while (num > 0);
    return count
}

console.log(countDigits(12345))