/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let val =0,max = nums[0];
    //负数是越加越小的
   for(let i =0;i<nums.length;i++){
       val = val + nums[i];
       max = val > max ? val : max;
       val = 0>val ? 0 :val;
   }

   return max;
};
console.log(maxSubArray([-2,-1,-3,-4,-1,-2,-1,-5,-4]))

// @lc code=end

