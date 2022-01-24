/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start

//  *Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */

let maxD = 0;


var diameterOfBinaryTree = function(root) {
    maxD = 0 //某种情况下需要手动重置一下全局变量
    traverse(root);

    return maxD;
};


function traverse(root){

    if(!root) return;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    let max = left + right;
    console.log(maxD)
    maxD = Math.max(max,maxD);

    traverse(root.left);
    traverse(root.right)
}


function maxDepth(root){
    if(!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return 1+Math.max(left,right)

}

const root = new TreeNode(1,new TreeNode(2,null,null),null)

console.log(diameterOfBinaryTree(root))
// @lc code=end

