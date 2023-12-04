/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let num = 0;

    for (let i = 0; i < s.length; i += 1) {
        const current = s[i];
        const next = s[i + 1];

        if (map[next] > map[current]) {
            num -= map[current];
        } else {
            num += map[current];
        }
    }

    return num;
};
// @lc code=end

