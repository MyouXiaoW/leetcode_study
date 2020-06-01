/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

var isSymmetric = function (root) {
    const check = (left, right) => {   // 参数接收左右子树
      if (!left && !right) return true // 左右子树都不存在 也是对称的 
      if (left && right) {             // 左右子树都存在，要继续判断
        return left.val === right.val &&   // 左右子树的顶点值要相等
          check(left.left, right.right) && // 左子树的left和右子树的right相等
          check(left.right, right.left)    // 左子树的right和右子树的left相等
      }
      return false;  // 左右子树中的一个不存在，一个存在，不是对称的
    }
    return !root || check(root.left, root.right) // root为null也是对称的
                                                 // 不满足则调用check判断左右子树
  };


//   var isSymmetric = (root) => {
//     if (!root) return true
//     let leftStack = [], rightStack = [] // 维护两个栈
//     let curLeft = root.left   // 当前的左子树
//     let curRight = root.right // 当前的右子树
//     while (curLeft || curRight || leftStack.length || rightStack.length) {
//       while (curLeft) {         // 左子树存在
//         leftStack.push(curLeft) // 推入leftStack栈
//         curLeft = curLeft.left  // 不断将左子树入栈
//       }
//       while (curRight) {          // 右子树存在
//         rightStack.push(curRight) // 推入rightStack栈
//         curRight = curRight.right // 不断将右子树压入栈
//       }
//       if (leftStack.length !== rightStack.length) return false
//                                   // 栈的高度不相等，说明结构不对称
//       curLeft = leftStack.pop()   // 栈顶节点出栈，赋给curLeft
//       curRight = rightStack.pop() // 栈顶节点出栈，赋给curRight
//       if (curLeft.val !== curRight.val) return false
//                                   // 两个栈出栈的节点值不相等 不对称
//       curLeft = curLeft.right     // 考察左子树的right
//       curRight = curRight.left    // 考察右子树的left
//     }
//     return true
//   }


//   var isSymmetric = (root) => {
//     if (!root) return true
//     let queue = [root.left, root.right]
//     while (queue.length) {          // 队列为空代表没有可入列的节点，遍历结束
//       let len = queue.length        // 获取当前层的节点数
//       for (let i = 0; i < len; i += 2) { // 一次循环出列两个，所以每次+2
//         let left = queue.shift()    // 左右子树分别出列
//         let right = queue.shift()   // 分别赋给left和right变量
//         if ((left && !right) || (!left && right)) return false // 不满足对称
//         if (left && right) { // 左右子树都存在
//           if (left.val !== right.val) return false // 左右子树的根节点值不同
//           queue.push(left.left, right.right) // 让左子树的left和右子树的right入列
//           queue.push(left.right, right.left) // 让左子树的right和右子树的left入列
//         }
//       }
//     }
//     return true // 循环结束也没有遇到返回false
//   }

// @lc code=end

