/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
   let max = -1
   const stack = []
  
   for(let i = 0; i < s.length; i++){
     const start = stack.indexOf(s[i])
     if(start !== -1){
       const len = i - start -1 
       if(max < len) max = len
     }
     stack.push(s[i])
   }
  return max
};