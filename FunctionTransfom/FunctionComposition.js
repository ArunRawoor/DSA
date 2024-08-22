/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Start with the initial value x
        let result = x;
        
        // Apply the functions in reverse order
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        // Return the final result
        return result;
    };
};


// Define two functions to compose
const fn1 = x => x + 1;  // Adds 1 to the input
const fn2 = x => 2 * x;  // Multiplies the input by 2

// Compose these functions
const composedFn = compose([fn1, fn2]);

// Test the composed function
console.log(composedFn(4)); // Output: 9
