function randomDelayPrint(message) {
    let totalDelay = 0;

    for (let i = 0; i < message.length; i++) {
        const delay = Math.random() * 1000; 
        totalDelay += delay;

        setTimeout(() => {
            console.log(message[i]);
        }, totalDelay);
    }
}

randomDelayPrint("Hello");


function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId); 
        timeoutId = setTimeout(() => {
            func.apply(this, args); 
        }, delay);
    };
}

function intervalRace(functions, t) {
    return new Promise((resolve) => {
        const results = [];
        let index = 0;

        function executeNext() {
            if (index < functions.length) {
                const result = functions[index](); 
                results.push(result); 
                index++;
                setTimeout(executeNext, t); 
            } else {
                resolve(results); 
            }
        }

        executeNext();
    });
}


const func1 = () => "Результат 1";
const func2 = () => "Результат 2";
const func3 = () => "Результат 3";

const functions = [func1, func2, func3];

intervalRace(functions, 1000).then((results) => {
    console.log("Всі результати:", results);
});

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
