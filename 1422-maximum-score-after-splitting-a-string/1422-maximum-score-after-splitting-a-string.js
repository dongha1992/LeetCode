/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
   const ONLY_ZERO_REGX = /0/g
   const ONLY_ONE_REGX = /1/g
   let max = 0;
  
   const count = ({str, regx}) => {
     return (str.match(regx) || []).length
   }
   
   for(let i = 0; i < s.length-1; i++){
     const left = count({str:s.substr(0, i+1), regx:ONLY_ZERO_REGX})
     const right = count({str:s.substr(i+1), regx:ONLY_ONE_REGX})
     if(max < left+right) max = left+right
   }
  return max
};