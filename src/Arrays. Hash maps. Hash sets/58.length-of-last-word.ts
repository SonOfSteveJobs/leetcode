/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    const trimmed = s.trim();
    const splited = trimmed.split(' ');

    return splited[splited.length - 1].length;
};
// @lc code=end

