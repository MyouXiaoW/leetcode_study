/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 合并两个有序表
// 1.创建一个虚拟节点，当作头部
// 2.创建两个指针，在两个有序链表上进行循环使用
// 3.在一个链表上遍历，遍历完成这个链表
var mergeTwoLists = function(list1, list2) {
    let next = head = new ListNode(-1);
    let fast = list1;
    let slow = list2;
  

    while(fast !==null&& slow!==null){
    
        if(fast.val>slow.val){
            next.next = slow
            slow = slow.next;//值大的那一个进入下一个节点
        }else{
            next.next = fast
            fast = fast.next
        }

    


        next = next.next;
    }

    if(fast !==null){
        next.next = fast;
    }

    if(slow !==null){
        next.next = slow;
    }

    return head.next;
};
// @lc code=end

