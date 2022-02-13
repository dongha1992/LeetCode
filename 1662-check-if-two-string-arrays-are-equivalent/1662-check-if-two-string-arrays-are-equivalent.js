/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return joined(word1) === joined(word2)
};

const joined = (arr) =>{
return arr.join("")
}