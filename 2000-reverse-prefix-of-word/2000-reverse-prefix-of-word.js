/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   let lt = 0;
   let answer = ""
   while (word[lt] !== ch) {
    if(lt > word.length) return word
    answer = word[lt] + answer;
    lt++;
  }
  answer = word[lt] + answer;
  lt++;

   while(lt < word.length){
     answer += word[lt++]
   }
  return answer
};