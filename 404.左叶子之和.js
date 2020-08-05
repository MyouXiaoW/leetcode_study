/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    let total = 0;

    findNode(root);

    function findNode(node){
        if(node.left && !node.left.left && !node.left.right){
            total+=node.left.val;
        } 
        if(node.left) findNode(node.left,total)
        if(node.right) findNode(node.right,total)
    }
    return total
};
// @lc code=end

