function doubleLetter(str) {
    return str.split('').map(char => char.repeat(2)).join('')
}

function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str
    }

    const paddingLength = length - str.length
    const padding = symbol.repeat(paddingLength)

    return toLeft ? padding + str : str + padding
} 
function camelCase(str, separator) {
    return str.split(separator).map((word, index) => {
        if (index === 0) {
            return word.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
}


console.log(camelCase("hello world", " "))
console.log(camelCase("java_script_is_fun", "_"))
console.log(padString('Ivan', 6, '*'))
console.log(padString('Ivan', 6, '*', true))
console.log(doubleLetter("hello"))
