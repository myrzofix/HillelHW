function sumArrayPromise(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr) || arr.some(num => typeof num !== 'number')) {
            reject(new Error('Вхідні дані мають бути масивом чисел'));
        } else {
            setTimeout(() => {
                const sum = arr.reduce((acc, num) => acc + num, 0);
                resolve(sum);
            }, 3000);
        }
    });
}
function concurrentPromises(promises, maxConcurrent) {
    return new Promise((resolve, reject) => {
        const results = [];
        let running = 0;
        let index = 0;

        const executeNext = () => {
            if (index >= promises.length) {
                if (running === 0) resolve(results);
                return;
            }

            const currentIndex = index++;
            const currentPromise = promises[currentIndex];

            running++;
            Promise.resolve(currentPromise())
                .then(result => {
                    results[currentIndex] = result;
                })
                .catch(err => {
                    reject(err);
                })
                .finally(() => {
                    running--;
                    executeNext();
                });
        };

        for (let i = 0; i < Math.min(maxConcurrent, promises.length); i++) {
            executeNext();
        }
    });
}

const promiseTasks = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    () => new Promise(resolve => setTimeout(() => resolve(3), 3000)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 1000))
];
async function sequenceAsync(asyncFunctions) {
    let result;
    for (const func of asyncFunctions) {
        result = await func(result);
    }
    return result;
}

const asyncFunctions = [
    (prev) => Promise.resolve((prev || 0) + 1),
    (prev) => Promise.resolve(prev * 2),
    (prev) => Promise.resolve(prev - 3)
];

sequenceAsync(asyncFunctions)
    .then(finalResult => console.log(`Фінальний результат: ${finalResult}`)) // 0
    .catch(err => console.error(`Помилка: ${err.message}`));

concurrentPromises(promiseTasks, 2)
    .then(results => console.log(`Результати: ${results}`))
    .catch(err => console.error(`Помилка: ${err.message}`));

sumArrayPromise([1, 2, 3, 4])
    .then(sum => console.log(`Сума: ${sum}`))
    .catch(err => console.error(`Помилка: ${err.message}`));
