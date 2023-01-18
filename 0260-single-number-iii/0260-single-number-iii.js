/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const map = new Map()
  for(n of nums) {
    map.has(n) ? map.set(n, map.get(n)+1) : map.set(n, 1)
  }

  return [...map].filter(([k, v])=> v < 2).map(v=>v[0])
};