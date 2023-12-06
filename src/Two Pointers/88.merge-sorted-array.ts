/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     nums1.splice(m, n, ...nums2);
//     nums1.sort((a, b) => a - b);
// }; BAD!!!
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let length = (n + m) - 1
    let p1 = m - 1
    let p2 = n - 1
    while ((p2 >= 0)) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[length] = nums1[p1]
            length -= 1;
            p1 -= 1;
        } else {
            nums1[length] = nums2[p2]
            length -= 1;
            p2 -= 1;
        }
    }
};
// @lc code=end

