/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const answer = [[1]]
  
  for(let i = 1; i < numRows; i++){
    const row = []
    for(let j = 0; j <= i; j++){
      if(j===0 || j===i){
        row.push(1)
      } else {
        row.push(answer[i-1][j-1]+answer[i-1][j])
      }
    }
    answer.push(row)
  }
  return answer
};