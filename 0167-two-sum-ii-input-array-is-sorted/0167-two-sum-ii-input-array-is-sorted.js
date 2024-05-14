/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let lt = 0;
  let rt = numbers.length-1
  
  while(lt < rt){
    let sum = numbers[lt] + numbers[rt]
    if(sum === target){
      return [lt+1, rt+1]
    } else if(sum > target){
      rt--
    } else {
      lt++
    }
  }
};