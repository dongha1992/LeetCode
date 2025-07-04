/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const countMap = new Map()
    for(const n of nums) { 
        countMap.set(n, (countMap.get(n) || 0) + 1)
    }  
    
    const counts = [...countMap].sort((a, b) => b[1] - a[1]).map(c => c[0])


    // const stack = [];

    // for(let i = 0; i < counts.length; i++) {
    //     const count = counts[i];
    //     while(stack.length > 0 && k && stack[stack.length-1][1] < count[1]) {
    //         stack.pop()
    //         k--
    //     }
    //     stack.push(count)
    // }
    // return stack.map(s => s[0])
    return counts.slice(0, k)
};