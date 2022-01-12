/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   let preNode = newNode = new ListNode(null);
   let node = head;
   newNode.next =head;
   
   while(node){
    if(node.val ===val){
        preNode.next = node.next;
    }else{
        preNode = node;
    }
    node = node.next;
   }
   return newNode.next;
};
// @lc code=end

