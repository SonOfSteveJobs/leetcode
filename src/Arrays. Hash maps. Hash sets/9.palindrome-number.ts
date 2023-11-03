/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let newNum = 0;
    let num = x;

    while (num > 0) {
        const digit = num % 10;
        newNum = newNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return newNum === x;
};
// @lc code=end

