/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head;

    while (node && node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};
// @lc code=end

