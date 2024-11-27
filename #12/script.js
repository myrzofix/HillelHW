function summarize(num) {
    return function (arg = 1) {
        return num + arg;
    };
}
function counter(startValue, step) {
    let currentValue = startValue;

    function count() {
        currentValue += step;
        return currentValue;
    }

    count.increment = function () {
        currentValue += step;
    };

    count.decrement = function () {
        currentValue -= step;
    };

    count.reset = function () {
        currentValue = startValue;
    };

    return count;
}

function sequence(...fns) {
    return function (initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
}

function add2(x) {
    return x + 2;
}

function multiply3(x) {
    return x * 3;
}

function subtract5(x) {
    return x - 5;
}

const composedFunction = sequence(add2, multiply3, subtract5);

console.log(composedFunction(5)); 
console.log(composedFunction(0)); 


const add5 = summarize(5);
const myCounter = counter(10, 2);

console.log(add5(3)); 
console.log(add5());  

console.log(myCounter());
console.log(myCounter()); 
myCounter.increment();
console.log(myCounter()); 
myCounter.decrement();
console.log(myCounter()); 
myCounter.reset();
console.log(myCounter()); 

