/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let index = -1
  
  const map = {}
  for(let a of s){
    map[a] ? map[a] = map[a] + 1 : map[a] = 1
  }
  
  for(let i = 0; i < s.length; i++){
    if(map[s[i]]===1) {
      return index = i
    }
  }

  return index
};