/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return head;
    let newNode = new ListNode(null);
    newNode.next = head;
    let node = head;
    let next = head.next;
    let pre = newNode

    while(node && next){
        pre.next = next;
        node.next = next.next;
        next.next = node;

        pre = node;
        node = pre.next;
        next = node? node.next:null;
    }

    return newNode.next;
    
};
// @lc code=end

