/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if(!root) return  0;
    return getDeep(root);
    function getDeep(node){
        if(!node) return 0;
        if(!node.left && !node.right) return 1;
        if(!node.left) return 1+getDeep(node.right);
        if(!node.right) return 1+getDeep(node.left);
        return 1+Math.min(getDeep(node.left),getDeep(node.right))
    }
};
// @lc code=end

