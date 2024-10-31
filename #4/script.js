let num = prompt("Введіть рандомне натуральне число: ")
// #1 
let a = true; 
if (num <= 1) {
    a = false 
}
else {
    for (let i = 2; i <= Math.sqrt(num); i++ ) {
        if (num % i === 0) {
            a = false 
            break; 
        }
    }
}
if(a){
    console.log("Число є простим")
}else {
    console.log("Число не є простим")
}

// #2 

for (let i = 1; i <= num; i++) {
    let sum = 0; 
    for (let j = 1; j <= i / 2; j++) {
        if (i % i === 0) {
            sum += i;
        }
    }

    if (sum === i) {
        console.log(i + " число є досконалим"); 
    }
    
}

// #3 

let height = prompt("Введіть довжину ялинки: ")
let tree = ''

for (let i = 1; i <= height; i++) {
    for (let j = 0; j < height - i; j++) {
        tree += ' '
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        tree += '*'
    }
    if (i < height) {
        tree += '\n'
    }
}

console.log(tree);
