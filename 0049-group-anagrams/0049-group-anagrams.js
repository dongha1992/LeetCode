/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = new Map()

    for(const str of strs) {
        const key = str.split('').sort().join('');

        if (!anagrams.has(key)) {
            anagrams.set(key, []);
         }

         anagrams.get(key).push(str);
    }
    return [...anagrams.values()]
};