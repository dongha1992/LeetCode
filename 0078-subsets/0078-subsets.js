/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer = []
    let ch = Array.from({length:nums.length}, ()=>0)
    const n = nums.length
    
    const powerSet = (L) => {
        if(L===n){
           answer.push(nums.filter((v, i)=> ch[i]))
          } else {
            ch[L] = 1
            powerSet(L+1)
            ch[L] = 0
            powerSet(L+1)
        }
    }
    
    powerSet(0)
    return answer
};