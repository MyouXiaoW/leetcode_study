/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */



//在二叉搜索树中的中序遍历正好形成了一个按顺序拍好的数组
var kthSmallest = function(root, k) {
    let arr = [ ];
    
    
    function inter(root){
        if(!root) return ;
        inter(root.left);

        
        arr.push(root.val)
        console.log(root.val);
        inter(root.right);
    }

    inter(root);

    return arr[k-1]
};


// @lc code=end

