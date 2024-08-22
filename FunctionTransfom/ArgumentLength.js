/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // Return the number of arguments passed
    return args.length;
};
console.log(argumentsLength(1, 2, 3));        // Output: 3
console.log(argumentsLength('a', 'b'));       // Output: 2
console.log(argumentsLength(true, false, 4)); // Output: 3
console.log(argumentsLength());               // Output: 0
console.log(argumentsLength([1, 2], {a: 1})); // Output: 2
