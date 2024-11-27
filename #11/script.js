function logArguments(fn) {
    return function (...args) {
        console.log(`Аргументи функції: ${JSON.stringify(args)}`);
        return fn(...args);
    };
}

function validate(fn, validator) {
    return function (...args) {
        if (!validator(...args)) {
            throw new Error('Перевірка не пройдена');
        }
        return fn(...args);
    };
}

function retry(fn, maxAttempts) {
    return function (...args) {
        let attempts = 0;
        let lastError;

        while (attempts < maxAttempts) {
            try {
                return fn(...args);
            } catch (error) {
                attempts++;
                lastError = error;
                console.log(`Спроба ${attempts} не вдалася: ${error.message}`);
            }
        }

        throw lastError; 
    };
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function unreliableOperation() {
    if (Math.random() > 0.5) {
        throw new Error('Випадковий збій');
    }
    return 'Успішно!';
}

try {
    console.log(retriedOperation());
} catch (error) {
    console.error(`Операція не вдалася після 3 спроб: ${error.message}`);
}

const loggedAdd = logArguments(add);
const validator = (a, b) => typeof a === 'number' && typeof b === 'number';
const validatedMultiply = validate(multiply, validator);
const retriedOperation = retry(unreliableOperation, 3);
console.log(loggedAdd(1, 2)); 
console.log(validatedMultiply(2, 3)); 