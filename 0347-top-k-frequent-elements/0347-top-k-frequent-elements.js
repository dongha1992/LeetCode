/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const n = nums.length;
    const countMap = new Map()
    for(const n of nums) { 
        countMap.set(n, (countMap.get(n) || 0) + 1)
    }  
    
    const bucket = Array.from({length:n+1}).fill().map(() => []);

    for(const [val, freq] of countMap) {
        bucket[freq].push(val)
    }

    const result = [];

    for(let i = bucket.length-1; i >= 0 && result.length < k; i--) {
        for(const b of bucket[i]) {
            result.push(b)
            if(result.length === k) break;
        }
    }
    return result
};