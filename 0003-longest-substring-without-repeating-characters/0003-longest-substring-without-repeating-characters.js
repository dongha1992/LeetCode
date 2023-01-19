/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let maxLen = 0;
  let lt = 0;
  
  for(rt= 0; rt < s.length; rt++){
    if(map.has(s[rt])) lt = Math.max(lt, map.get(s[rt])+1)
    map.set(s[rt], rt)
    maxLen = Math.max(rt-lt+1,maxLen)
  }
    
  return maxLen
}