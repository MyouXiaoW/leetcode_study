/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let index = 1,target = newNode = new ListNode(null), node = head;
    newNode.next = head;

    while(node){
        if(index>n){
            target = target.next;
        }
        node = node.next;
        index++
    }
    target.next = target.next.next;
    
    return newNode.next;
};
// @lc code=end

