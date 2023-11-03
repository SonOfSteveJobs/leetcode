/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(value: number): string {
    const ans: string[] = [];
    const numberToRoman: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];
    for (const [num, roman] of numberToRoman) {
        while (value >= num) {
            value -= num;
            ans.push(roman);
        }
    }
    return ans.join("");
};
// @lc code=end

