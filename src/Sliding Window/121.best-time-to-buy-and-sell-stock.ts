/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] > prices[right]) {
            left = right;
            right += 1;
        }

        if (prices[left] <= prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            right += 1;
        }
    }

    return maxProfit;
};
// @lc code=end

