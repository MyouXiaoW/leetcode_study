/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length ===0) return false

  let row = 0,col = matrix.length-1;
  console.log(row,col)
  while(row<=matrix[0].length-1 && col >=0){
      let v = matrix[col][row];
      console.log(v)
      if (v ===target ) return true
      v > target && col--;
      v<target && row ++;
  }

  return false
};

searchMatrix([[-5]],5)
// @lc code=end

