/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // Variable to store the result of the function call
    let called = false;
    let result;
    
    return function(...args) {
        // Check if the function has been called before
        if (!called) {
            // Call the function and store the result
            result = fn(...args);
            called = true;
            return result;
        }
        // Return undefined for subsequent calls
        return undefined;
    };
};


const logOnce = once((x) => x * 2);

console.log(logOnce(5)); // Output: 10 (first call, returns the result of fn)
console.log(logOnce(10)); // Output: undefined (subsequent calls return undefined)
console.log(logOnce()); // Output: undefined (subsequent calls return undefined)
