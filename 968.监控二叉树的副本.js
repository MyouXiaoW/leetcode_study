/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;

    
    const check = (node)=>{
        if(!node) return 0;
        if(!node.left && !node.right){ //子叶节点
            return 0;
        }
        let leftNum = check(node.left);//左树的camera个数
        let rightNum = check(node.right);//右树的camera个数

        if(node.left && !node.right){
            node.val = Number(!node.left.val);
        }else if(!node.left && node.right){
            node.val = Number(!node.right.val);
        }else if(node.left.val ===0 || node.right.val ===0){
            node.val =1;
        }


        return leftNum+ rightNum + node.val;
    }

    return check(root);
    
};
// @lc code=end

