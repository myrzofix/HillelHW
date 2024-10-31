function reverseString(str) {
    let newString = ' '
    for (let i = str.length-1; i >= 0; i--) {
        newString += str[i]
    }
    return newString 
}

function isPalindrome(str) {
    let cleanedStr = str.replace(/\s+/g, '').toLowerCase()
    return cleanedStr === cleanedStr.split('').reverse().join('')
}
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return Math.abs(a)
}


console.log(findGCD(48, 18))
console.log(findGCD(56, 98))
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Hello"));
console.log(reverseString("Hello world!"))