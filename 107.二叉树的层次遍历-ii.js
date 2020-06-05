/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
//层次遍历
var levelOrderBottom = function(root) {
    if(!root) return [];
    let res = []
    let queue = [root]
    while(queue.length){
        let current =[];
        let temp = [];
        while(queue.length){
            let node =queue.shift();
            current.push(node.val);
            node.left && temp.push(node.left)
            node.right && temp.push(node.right)
        }
        res.push(current);
        queue = temp;
    }

    return res.reverse();
};
// @lc code=end

