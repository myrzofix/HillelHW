function reverseArray(arr) {
    return arr.reverse() 
}

function uniqueValues(arr1, arr2) {
    let uniqueArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (!uniqueArray.includes(arr1[i])) {
            uniqueArray.push(arr1[i])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (!uniqueArray.includes(arr2[j])) {
            uniqueArray.push(arr2[j])
        }
    }

    return uniqueArray
}

function calculateAverageGrade(students) {
    const totalGrades = students.reduce((sum, student) => sum + student.averageGrade, 0)
    return totalGrades / students.length
}


let students = [
    { name: 'Іван', age: 20, averageGrade: 85 },
    { name: 'Влад', age: 22, averageGrade: 90 },
    { name: 'Софія', age: 21, averageGrade: 78 }
];

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];

console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(uniqueValues(array1, array2)); 
console.log(calculateAverageGrade(students))