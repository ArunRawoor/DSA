/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // Cache to store previously computed results
    const cache = new Map();

    return function (...args) {
        // Create a unique key for the cache based on the arguments
        const key = JSON.stringify(args);

        // Check if the result is already cached
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Compute the result and store it in the cache
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}



const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log("------------------------Using the Example of the Sum of two var--------------------------");


console.log(memoizedSum(2, 3)); // Output: 5
console.log(memoizedSum(2, 3)); // Output: 5 (cached result)
console.log(memoizedSum(3, 2)); // Output: 5 (different arguments, not cached)

console.log("------------------------Using the Example of the Fibonachi Series--------------------------");


const fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2);
const memoizedFib = memoize(fib);

console.log(memoizedFib(5)); // Output: 5
console.log(memoizedFib(5)); // Output: 5 (cached result)
console.log(memoizedFib(6)); // Output: 8

console.log("------------------------Using the Example of the Factorial--------------------------");


const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached result)
console.log(memoizedFactorial(6)); // Output: 720
