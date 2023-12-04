/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let temp = [...new Set(nums)];
    nums.length = 0;
    nums.push(...temp);
    return nums.length;
};
// @lc code=end

