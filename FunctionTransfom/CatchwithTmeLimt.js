class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const currentTime = Date.now();
        const expiresAt = currentTime + duration;

        // Check if the key exists and hasn't expired
        const alreadyExists = this.cache.has(key) && this.cache.get(key).expiresAt > currentTime;

        // Set or update the key with the new value and expiration time
        this.cache.set(key, { value, expiresAt });

        // Set a timeout to remove the key when it expires
        setTimeout(() => {
            if (this.cache.has(key) && this.cache.get(key).expiresAt <= Date.now()) {
                this.cache.delete(key);
            }
        }, duration);

        return alreadyExists;
    }

    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        const currentTime = Date.now();
        if (this.cache.has(key) && this.cache.get(key).expiresAt > currentTime) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    /**
     * @return {number} count of non-expired keys
     */
    count() {
        const currentTime = Date.now();
        let count = 0;

        for (const [key, { expiresAt }] of this.cache) {
            if (expiresAt > currentTime) {
                count++;
            }
        }

        return count;
    }
}



const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 1000)); // false
console.log(cache.get(1)); // 42
console.log(cache.count()); // 1
setTimeout(() => {
    console.log(cache.get(1)); // -1 (after 1 second)
    console.log(cache.count()); // 0
}, 1001);
