/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
     const tempNumArr = []
 const stringNum = num.toString()
 
 for(let i = 0; i < stringNum.length; i++){
   let tempNum = stringNum.split("")
   const isNine = stringNum[i] === "9"
   
   if(!isNine){
    tempNum.splice(i,1,"9")
   }
   tempNumArr.push(tempNum.join(""))
 }
  return Math.max(...tempNumArr)
};