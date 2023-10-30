/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const isOpening = (bracket: string): boolean => openingBrackets.includes(bracket);
    const isClosing = (bracket: string): boolean => closingBrackets.includes(bracket);
    const splitted = s.split('');

    for (let i = 0; i < splitted.length; i += 1) {
        if (isOpening(splitted[i])) {
            //@ts-ignore
            stack.push(splitted[i]);
        }

        if (isClosing(splitted[i])) {
            const popped = stack.pop();
            if (!popped) {
                return false;
            }

            if (openingBrackets.indexOf(popped) !== closingBrackets.indexOf(splitted[i])) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
// @lc code=end

