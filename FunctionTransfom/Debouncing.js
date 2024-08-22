/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;

    return function(...args) {
        // Clear the previous timeout if the function is called again within the delay
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout to call the function after the specified delay
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};





function searchQuery(query) {
    console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(searchQuery, 3000);

// Example usage: User typing in a search box
debouncedSearch('Java'); // Typing starts
debouncedSearch('JavaS'); // Typing continues, previous call is canceled
debouncedSearch('JavaScript'); // Typing continues, previous call is canceled
debouncedSearch('JSON'); // Typing continues, previous call is canceled


// 'Searching for: JavaScript' will be logged 300ms after the last call
