/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
   const charsMap = new Map()
    
    let answer =0;
  
    const mapGenerator = (str, map) => {
      for(let a of str){
     map.has(a) ? map.set(a, map.get(a)+1) : map.set(a,1)
     }
    }
    
    mapGenerator(chars, charsMap)
  
    const checkWord = (str) => {
     const wordMap = new Map()
     mapGenerator(str, wordMap)
      
     let flag = true
     for(let [k, v]of wordMap){
        if(!charsMap.has(k) || charsMap.get(k) < v) {
          flag = false
          break;
        }
      }
     return flag
    }
    
    for(let i = 0; i < words.length; i++){
        const word = words[i]
        if(checkWord(word)) {
            answer+= word.length
        }
    }
    return answer
};