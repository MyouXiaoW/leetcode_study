/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const res = [];

    _pathSum(root,sum,[]);
    
    function _pathSum(node,sum,pre){
        if(!node) return [];
        let left = pre.concat(node.val);
        let right = left.concat();
        if(node.left) _pathSum(node.left,sum-node.val,left);
        if(node.right) _pathSum(node.right,sum-node.val,right);
        if(!node.left && !node.right) {
            if(sum-node.val ===0){
                res.push(left);
            }
        }
    }

    return res;
};
// @lc code=end

