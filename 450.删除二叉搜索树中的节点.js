/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root.val < key) root.left = deleteNode(node.right,key);
    if(root.val > key) root.right = deleteNode(node.left,key);
    if(root.val ===key){
        root = root.left;
    }

    return root;
};
// @lc code=end

