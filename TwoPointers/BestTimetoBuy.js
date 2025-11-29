/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0; // Buy
  let right = 1; // Sell
  let profit = 0;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      if (maxProfit < profit) {
        maxProfit = profit;
      }
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
