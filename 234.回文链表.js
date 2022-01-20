/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

let left;

var isPalindrome = function(head) {
    left = head;
    return traverse(head)
};

function traverse(right){
    if(!right) return true;

    let res =  traverse(right.next);

    res = res && (left.val === right.val);
    left = left.next;
    return res

}
// @lc code=end

