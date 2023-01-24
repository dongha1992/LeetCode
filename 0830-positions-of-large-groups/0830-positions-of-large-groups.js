/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let answer = []
  let lt = 0
  let cnt = 0;
  let flag = false
  
  for(let i = 0; i < s.length; i++){
    if(s[i]===s[i+1]) {
      cnt++
      flag = true
    } else {
      if(cnt>=2 &&flag){
        answer.push([lt, i])
      }
      cnt = 0
      flag = false
      lt = i +1
    }
  }
  return answer
 
};