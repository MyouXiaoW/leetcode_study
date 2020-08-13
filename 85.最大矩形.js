/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let t =  matrix.map((e)=>{
       return  parseInt(e.join(''),2)
    })
    console.log(t)
};

maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","0","1","1","1"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","1","1","1","1"],
    ["1","1","1","1","0"],
    ["1","1","1","0","0"],
    ["1","1","1","1","0"],
  ])
// @lc code=end

