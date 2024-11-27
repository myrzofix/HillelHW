
const notifications = [
    { source: 'email', text: 'Нова пошта', date: '2024-11-27' },
    { source: 'sms', text: 'Повідомлення', date: '2024-11-26' },
    { source: 'email', text: 'Текст по пошті', date: '2024-11-25' },
];

notifications[Symbol.iterator] = function* () {
    for (const key in this) {
        if (Array.isArray(this[key])) {
            yield* this[key];
        }
    }
};

for (const notification of notifications) {
    console.log(notification);
}

function memoize(fn, cacheLimit = 10) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        for (const [cachedKey, cachedValue] of cache.entries()) {
            if (cachedValue === result) {
                cache.delete(cachedKey);
                break;
            }
        }

        if (cache.size >= cacheLimit) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        cache.set(key, result);

        return result;
    };
}

const slowFunction = (x, y) => {
    console.log(`Computing for ${x} and ${y}...`);
    return x + y;
};

const memoizedFunction = memoize(slowFunction, 3);

console.log(memoizedFunction(1, 2));
console.log(memoizedFunction(1, 2)); 
console.log(memoizedFunction(3, 4)); 
console.log(memoizedFunction(5, 6)); 
console.log(memoizedFunction(7, 8)); 
console.log(memoizedFunction(1, 2)); 
