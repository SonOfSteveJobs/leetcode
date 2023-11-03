/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let start = new ListNode();
    let end = start;

    while (list1 && list2) {
        const isList2Greater = list1.val <= list2.val;
        const isList2Less = list1.val > list2.val;

        if (isList2Greater) {
            end.next = list1;
            list1 = list1.next;
        }

        if (isList2Less) {
            end.next = list2;
            list2 = list2.next;
        }
        //@ts-ignore
        end = end.next;
    }

    end.next = list1 || list2;

    return start.next;
};
// @lc code=end

