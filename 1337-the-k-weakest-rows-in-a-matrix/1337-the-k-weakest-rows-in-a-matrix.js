/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */



var kWeakestRows = function(mat, k) {
 const arr = mat.map(g => g.filter(el => el === 1).length)
  const ch = Array.from({length:arr.length}).fill(0)
  const answer = []
  let cnt = 0;
  
  while(cnt < k){
    let min = [Infinity, -1]
    for(let i = 0; i < arr.length; i++){
      if(!ch[i] && arr[i] < min[0]){
        min = [arr[i], i]
      }
    }
    answer.push(min)
    ch[min[1]] = 1
    cnt++
  }
  return answer.map(a => a[1])
};