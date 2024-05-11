/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word[0] !== word[word.length - 1]) continue;
    const result = findPalindrome(word);
    if (result) return word;
  }
    return ""
};

function findPalindrome(word) {
  let lt = 0;
  let rt = word.length - 1;
  while (lt <= rt) {
    if (word[lt] !== word[rt]) return false;
    lt++;
    rt--;
  }
  return true;
}