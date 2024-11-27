function fibonacci(n) {
    if (n <= 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
}
function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function createPalindrome(num) {
    let steps = 0;
    let result = num;

    while (!isPalindrome(result)) {
        result = result + parseInt(result.toString().split('').reverse().join(''));
        steps++;
        if (steps > 1000) { 
            throw new Error('Можливо Lychrel число');
        }
    }

    return { result, steps };
}

function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        let permutations = getPermutations(rest);
        
        for (let perm of permutations) {
            result.push([arr[i], ...perm]);
        }
    }
    
    return result;
}

console.log(getPermutations([1, 2, 3])); 

console.log(fibonacci(5));  
console.log(fibonacci(10)); 

console.log(createPalindrome(196)); 
console.log(createPalindrome(312)); 