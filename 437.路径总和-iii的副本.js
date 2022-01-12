/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return 0
    let flag = findNode(root,sum);
    let left = pathSum(root.left,sum);
    let right = pathSum(root.right,sum);

    function findNode(node,sum){
        if(!node) return 0;

        let flags = node.val ===sum ? 1:0;
        let left  = findNode(node.left,sum -node.val);
        let right = findNode(node.right,sum-node.val);

        return flags + left + right;
    }

    return flag + left +right;
};
// @lc code=end


