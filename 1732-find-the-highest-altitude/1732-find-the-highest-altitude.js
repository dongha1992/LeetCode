/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
      const result = [0]
  for(let i = 0; i <gain.length; i++){
    let temp = result[i] + gain[i]
    result.push(temp)
  }
  return Math.max(...result)
};