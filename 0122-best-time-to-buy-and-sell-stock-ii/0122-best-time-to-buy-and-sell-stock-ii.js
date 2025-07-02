/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    let profit = 0;

    for(let i = 0; i < n; i++) {
        const price = prices[i]
        if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1]; 
     }
    }
return profit
};