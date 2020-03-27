/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
// var deleteDuplicates = function(head) {
//     if(!head || !head.next) return head;

//     let current = head;
//     while(current.next){
//         if(current.val === current.next.val){
//             current.next = current.next.next;
//         }else{
//             current = current.next
//         }
//     } 

//     return head;
// };


//快慢指针
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    var fast = head.next,slow = head;
    // 快慢指针 
    while(fast){
        // 如果 慢指针和 快指针 不一样，即 head[0] !== head[1] 可以将快指针赋值给 慢指针的next
        if(slow.val !== fast.val){
            slow.next = fast;
            // 慢指针向下移动
            slow = slow.next
        }else{ // 如果 慢指针和 快指针一样，即 head[0] == head[1] 说明快指针当前指向元素 和上一元素重复，我们放弃这个元素，将快指针向下移动，
            fast = fast.next;
            //将快指针 之后还没有确认是否重复的元素 重新赋值到 慢指针的next 保证 next 是 不重复 或者 还未确认是否 重复的集合
            slow.next = fast;
        }
    }
    return head
};

// @lc code=end

