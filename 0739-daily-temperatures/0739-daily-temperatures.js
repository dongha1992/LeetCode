/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
 let answer = []
 let lt = null
  
 for(let i = 0; i < temperatures.length; i++){
   const cur = temperatures[i]
   const next = temperatures[i+1]
   
   if(cur < next) answer.push(1)
   else {
     for(let j = i; j < temperatures.length; j++){
       if(cur < temperatures[j]) {
         answer.push(j-i)
         break;
       } else {
         if(j === temperatures.length-1){
           answer.push(0)
         }
       }
     }
   }   
 }
  return answer
};