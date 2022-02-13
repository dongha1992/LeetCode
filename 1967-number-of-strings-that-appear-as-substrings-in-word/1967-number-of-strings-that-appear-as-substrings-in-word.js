/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
   // const newWord = [...new Set(word)].join('');
   const filtered = patterns.filter((pattern) => {
    return word.indexOf(pattern) > -1;
 });
 return filtered.length;
};