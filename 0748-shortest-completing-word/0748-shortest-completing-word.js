/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
let answer = ""
  let max = 0;
  const extract = licensePlate.match(/[a-z]#?/ig)
  const charMap = {}
  
  for(char of extract) {
    char = char.toLowerCase()
    charMap[char] ? charMap[char] = charMap[char] + 1 : charMap[char] = 1
  }
  
  const len = Object.values(charMap).reduce((a, b) => a+b, 0)
  
  const compare = (str1, str2) => {
    let map = Object.assign({},charMap)
    for(let char2 of str2){
      if(map[char2]){
       map[char2] = map[char2] - 1 
      }
    }
    console.log(map)
    return len - Object.values(map).reduce((a, b)=> a+b, 0)

  }
  
  for(let i = 0; i < words.length; i++){
    const result = compare(charMap, words[i])
    console.log(result)
    if(max <= result){
      if(max === result) {
       if(answer.length > words[i].length){
          max = result
          answer = words[i] 
        } else {
             continue;
        }
        if(answer.charCodeAt() > words[i].charCodeAt()){
          max = result
          answer = words[i] 
        }
      } else {
        max = result
        answer = words[i] 
      }
    }
  }
  return answer
};