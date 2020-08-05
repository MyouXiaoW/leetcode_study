/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
    if(!root) return 0;
    let sum = 0;
    findNode(root,0);

    function findNode(node,currentSum){
        currentSum = currentSum * 10 + node.val;
        if(node.left) findNode(node.left,currentSum);
        if(node.right) findNode(node.right,currentSum);
        if(!node.left && !node.right) sum+=currentSum;
    }

    return sum;
};
// @lc code=end

