/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);  
        const y = stones.shift();      
        const x = stones.shift();      

        if (x !== y) {
            stones.push(y - x);        
        }

    }

    return stones[0] || 0;     
};