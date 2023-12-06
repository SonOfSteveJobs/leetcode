/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];

    const inner = (root: TreeNode | null, level: number) => {
        if (root === null) return;

        if (result[level]) {
            result[level].push(root.val);
        } else {
            result[level] = [root.val];
        }

        inner(root.left, level + 1);
        inner(root.right, level + 1);
    }

    inner(root, 0);
    return result;
};
// @lc code=end

