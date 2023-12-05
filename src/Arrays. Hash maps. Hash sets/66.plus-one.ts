/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(Number)
};
// @lc code=end

