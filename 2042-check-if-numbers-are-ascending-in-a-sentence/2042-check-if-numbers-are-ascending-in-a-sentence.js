/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const EXTRACT_NUMBERS_REGS = /\d[0-9]{0,10}/g 
    
    const onlyNums = s.match(EXTRACT_NUMBERS_REGS)||[]

    for(let i = 0; i < onlyNums.length; i++){
      if(+onlyNums[i] - +onlyNums[i+1] >= 0) {
         return false
         }
     }
  return true
};