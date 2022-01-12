/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
   //1.现成的方法
   //return ~~Math.sqrt(x);

   //2.用循环求值(牛顿法)
   if(x ===0) return 0
   let re = 1;
   while(!(re*re <=x && (re+1)*(re+1)>x)){
        re = ~~(re-(re*re-x)/(2*re))
   }
   return re
};

console.log(mySqrt(8))
// @lc code=end

