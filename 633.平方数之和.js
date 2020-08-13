/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let y =Math.floor(Math.sqrt(c)),x=0;
    while(x<=y){
        let sum = y*y + x*x;

        if(sum===c) return true;

        if(sum>c){
            y--
        }
        
        if(sum<c){
            x++
        }

    }
    return false;
};

console.log(judgeSquareSum(2))

// @lc code=end

