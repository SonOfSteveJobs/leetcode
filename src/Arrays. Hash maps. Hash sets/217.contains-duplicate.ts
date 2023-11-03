/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums)

    return nums.length !== Array.from(set).length
};
// @lc code=end

