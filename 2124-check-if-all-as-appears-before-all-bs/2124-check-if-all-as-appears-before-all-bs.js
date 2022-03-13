/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
      const hasA = s.indexOf("a") > -1
  if(!hasA) return true

  let countedB = false

  for(let i=  0; i < s.length; i++){
    if(countedB){
      if(s[i]==='a'){
        return false
      }
    }
    if(s[i] === 'b'){
      countedB = true
    } 
  }
  return true
};