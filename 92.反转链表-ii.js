/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 
 */


function revers(head){

    if(!head || !head.next){
        return head;
    }
    const last = revers(head.next);
    head.next.next = head;
    head.next = null;
    return last
}

let next = null;
function reversN(head,n){
    if(n===1){
        next = head.next;
        return head;
    }

    const last = reversN(head.next,n-1);
    head.next.next = head;
    head.next = next;

    return last

}


var reverseBetween = function(head, left, right) {

    if(left ===1){
        return reversN(head,right)
    }
     head.next = reverseBetween(head.next,left-1,right-1)
     return head;
    
};
// @lc code=end

