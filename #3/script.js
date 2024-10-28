/// #1 
let a = prompt("Введіть рандомне число: ");

if (a % 3 === 0 && a % 5 === 0) {
    console.log("FizzBuzz");
} else if (a % 3 === 0 ) {
    console.log("Fizz");
} else if (a % 3 === 0) {
    console.log("Buzz");
} 

/// #2 

let b = prompt("Введіть любий рік: ")
if (b % 4 === 0){
    console.log("Рік високосний")
}
else {
    console.log ("Рік не є високосним")
}

/// #3 

let age = prompt("Введіть ваш вік: ");
let yearsWord;
if (age % 10 === 1 && age % 100 !== 11) {
    yearsWord = "рік";
} else if ((age % 10 >= 2 && age % 10 <= 4) && (age % 100 < 10 || age % 100 >= 20)) {
    yearsWord = "роки";
} else {
    yearsWord = "років"; 
}

console.log(`Вам ${age} ${yearsWord}.`)