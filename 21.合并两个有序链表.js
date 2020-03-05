/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1,l2){
    if(l1 ==null){
        return l2
    }

    if(l2 ==null ){
        return l1
    }

    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
}


// var mergeTwoLists = function(l1, l2) {
//     if(!l1 && !l2) return l1 || l2;
//     let head = new ListNode(0) , tail = head;
   
//     while(l1 && l2){
//         let val
//         if(l1.val > l2.val){
//             val = l2.val;
//             l2 = l2.next;
//         }else{
//             val = l1.val
//             l1 = l1.next
//         }

         
//         tail.next = new ListNode(val);
//         tail = tail.next;
//     }

//     tail.next = l1 || l2

//     head = head.next;
    
    
//     return head;
// };



let num1 = new ListNode(1)
let num2 = new ListNode(2)
let num4 = new ListNode(4)

function List (){
    this.head = null;
    this.tail = null
}
List.prototype.push = function(val){
    if(!this.head){
        this.head = new ListNode(val)
        this.tail = this.head;
    }else{
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }
}

let l1 = new List()
l1.push(1)
l1.push(2)
l1.push(4)

let l2 = new List()
l2.push(1)
l2.push(3)
l2.push(4)
mergeTwoLists(l1.head,l2.head)
// @lc code=end

