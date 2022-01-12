/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j=0,i=0;
    while(i<nums.length){
        if(nums[i]!==0){
            if(j<i){
                [nums[j],nums[i]] = [nums[i],nums[j]]
            }
            j++
        }
        i++
    }
    console.log(nums)
};

moveZeroes([0,1,0,3,12])
// @lc code=end

