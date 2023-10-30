/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    const OPERATORS = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    const performOperation = (char, stack) => {
        const [rightNum, leftNum] = [stack.pop(), stack.pop()];
        const operation = OPERATORS[char];

        return operation(leftNum, rightNum);
    }

    for (const char of tokens) {
        const isOperation = char in OPERATORS;
        if (isOperation) {
            const value = performOperation(char, stack);

            stack.push(value);

            continue;
        }

        stack.push(Number(char));
    }
    //@ts-ignore
    return stack.pop();
};
// @lc code=end

