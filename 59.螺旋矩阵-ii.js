/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = [];
    let isMaxX = false,isMaxY=false;
    for(let i=0;i<n;i++){
        res.push(Array.from({length:n}));
    }


    console.log(res);

    const backtrack = (x,y,num)=>{
        if(num > (n*n)) return;
        if(x<n) backtrack()
    }
};


generateMatrix(10)

// @lc code=end
//    0，1，2，3
// 0  1，2，3，4
// 1  12，13，14，5
// 2  11，16，15，6
// 3  10，9，8，7