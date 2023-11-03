/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    return s.repeat(2).slice(1, -1).includes(s);
};
// @lc code=end

