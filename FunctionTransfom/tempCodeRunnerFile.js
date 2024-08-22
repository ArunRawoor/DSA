
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3)); // Output: 5
console.log(memoizedSum(2, 3)); // Output: 5 (cached result)
console.log(memoizedSum(3, 2)); // Output: 5 (different arguments, not cached)