/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let answer = ""
  let cur = ""
  let flag = false
  for(let i = 0; i < strs[0].length; i++){
    cur = strs[0][i]
    for(let str of strs){
      if(cur !== str[i]){
        flag = true
      }
    }
    if(!flag){
    answer += cur ? cur : ""
    }
  }
  return answer
};