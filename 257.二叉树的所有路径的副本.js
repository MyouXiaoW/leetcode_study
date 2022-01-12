/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    let res = [];

    findNode(root,[])

    function findNode(node,pre){
        if(!node) return ;
        let left = pre.concat(node.val);
        let right = left.concat();
        if(node.left) findNode(node.left,left);
        if(node.right) findNode(node.right,right);
        if(!node.left && !node.right) res.push(left.join('->'));
    }


    return res;
};
// @lc code=end

