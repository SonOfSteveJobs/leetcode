/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    minStack: number[];
    stack: number[];

    constructor() {
        this.minStack = [];
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        }

        if (this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const popped = this.stack.pop();

        if (!this.stack.length) {
            this.minStack = [];
        }

        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1] ?? null;
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1] ?? null;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

