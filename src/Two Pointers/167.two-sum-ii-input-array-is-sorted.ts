/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let [left, right] = [0, numbers.length - 1];

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        const isTarget = sum === target;
        const targetIsLess = sum > target;
        const targetIsGreater = sum < target;

        if (targetIsGreater) {
            left += 1;
        }

        if (targetIsLess) {
            right -= 1;
        }

        if (isTarget) {
            return [left + 1, right + 1]
        }
    }

    return [-1, -1]
};
// @lc code=end

