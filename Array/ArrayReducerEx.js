// Define the reduce function
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Initialize the accumulator with the initial value
    let val = init;
    
    // Iterate over each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Apply the reducer function and update the accumulator
        val = fn(val, nums[i]);
    }
    
    // Return the final accumulated value
    return val;
};

// Example usage
const nums = [1, 2, 3, 4,5];
const fn = (acc, curr) => acc + curr;
const init = 0;

// Call the reduce function and print the result
console.log(reduce(nums, fn, init)); // Output: 10

