/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const ch = Array.from({length:s.length}, ()=>0)
  let dis = 1000
  
  for(let i = 0; i < s.length; i++){
    if(s[i]===c) {
      dis = 0;
      ch[i] = dis
    } else {
      ch[i] = ++dis
    }
  }

  for(let i = s.length-1; i >= 0; i--){
   if(s[i]===c) {
     dis = 0;
     ch[i] = dis
   } else {
     dis++
     ch[i] = Math.min(dis, ch[i])
    }
  }
  return ch
};