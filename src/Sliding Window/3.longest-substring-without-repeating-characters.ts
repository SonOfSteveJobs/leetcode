/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right += 1) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left += 1;
        }
        set.add(s[right]);
        max = Math.max(max, set.size);
    }
    return max;
};
// @lc code=end

