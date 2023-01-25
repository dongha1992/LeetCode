/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const compare = (str1, str2) => {   
    let result = ""
    const s1 = {}
    
    for(let a of str1){
      s1[a] ? s1[a]= s1[a]+1:s1[a]=1
    }
    
    for(let b of str2){
      if(s1[b]){
        s1[b]--
        result += b
      } 
    }
    return result
  }

  let answer = compare(words[0], words[1])
  
  for(let i = 1; i < words.length-1; i++){
    answer = compare(answer, words[i+1])
  }

  return answer.split("")
};