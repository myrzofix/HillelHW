const words = ["apple", "banaNA", "kiWi", "ORANGE"];

console.log(capitalizeStrings(words));

const array1 = [1,2,3,4, 5];
const array2 = [3, 4, 5, 6,7];

console.log(findCommonElements(array1, array2));

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); 


function capitalizeStrings(strings) {
    return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}

function findCommonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}
function analyzeArray(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}