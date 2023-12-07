/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
// function singleNumber(nums: number[]): number {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i += 1) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], true);
//         } else {
//             map.delete(nums[i]);
//         }
//     }

//     return map.keys().next().value;
// }; //better runtime

function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
    return null;
}; //better memory
// @lc code=end

