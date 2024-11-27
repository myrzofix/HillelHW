function getPrimes(numbers) {
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    return numbers.filter(isPrime);
}

function groupNotificationsBySource(notifications) {
    return notifications.reduce((result, notification) => {
        const { source } = notification;
        if (!result[source]) {
            result[source] = [];
        }
        result[source].push(notification);
        return result;
    }, {});
}


const notifications = [
    { source: 'email', text: 'Нова пошта', date: '2024-11-27' },
    { source: 'sms', text: 'Повідомлення', date: '2024-11-26' },
    { source: 'email', text: 'Текст по пошті', date: '2024-11-25' },
];
function group(array, callback) {
    return array.reduce((result, item) => {
        const key = callback(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}

const data = [6.1, 4.2, 6.3];
const grouped = group(data, Math.floor);
console.log(grouped); 

const words = ['one', 'two', 'three'];
const groupedByLength = group(words, word => word.length);
console.log(groupedByLength); 

console.log(groupNotificationsBySource(notifications));

const numbers = [1, 2, 3, 4, 5, 10, 17, 20];
console.log(getPrimes(numbers)); 
