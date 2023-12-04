/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = strs[0];

    for (let i = 0; i < strs.length; i += 1) {
        while (!strs[i].startsWith(commonPrefix)) {
            commonPrefix = commonPrefix.slice(0, -1);
        }
    }
    return commonPrefix;
};
// @lc code=end

