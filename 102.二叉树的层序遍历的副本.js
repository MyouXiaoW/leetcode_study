/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let arr =[];
    while(queue.length>0){
        let len = queue.length;
        let row = [];
        while(len){
            let node = queue.shift();
            row.push(node.val);
            if(node.left)queue.push(node.left)
            if(node.right) queue.push(node.right);
            len--;
        }
        arr.push(row);
    }
    return arr;
};
// @lc code=end

