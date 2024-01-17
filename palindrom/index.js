/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const numString = x.toString();
    return numString === numString.split("").reverse("").join("");
};

console.log(isPalindrome(123))