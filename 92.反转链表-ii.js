/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let newNode = new ListNode(null),
    start,
    index=0,
    node;
    newNode.next = head;
    node = newNode;


    while(index<n){
        if(index<m){
            start = node;
            node=node.next;
        };

        if(index>=m && index<n){
            let next = node.next;
            node.next = next.next
            next.next = start.next;
            start.next = next;
        }

        index++
    }

    return newNode.next;
};
// @lc code=end

