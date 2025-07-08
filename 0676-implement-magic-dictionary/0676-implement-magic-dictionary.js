
var MagicDictionary = function() {
    this.dict = [];
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.dict = dictionary;
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {

    for (let word of this.dict) {
        if (isOneCharDiff(word, searchWord)) {
            return true;
        }
    }
    return false;
    
    function isOneCharDiff(word1, word2) {
        if (word1.length !== word2.length) return false;
        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diff++;
            if (diff > 1) return false;
        }
        return diff === 1;
}
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */