/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let answer = 0;
    let set = new Set()
    const visited = new Array(nums.length).fill(false);

    function find(x) {
        if(set.has(nums[x])) {
            answer = Math.max(set.size, answer)
            set = new Set()
            return
        };
        visited[nums[x]] = true
        set.add(nums[x])
        find(nums[x])
    }

    for(let i = 0; i < nums.length; i++) {
        if(!visited[i]) {
            find(i)
        }
    }
    return answer
};