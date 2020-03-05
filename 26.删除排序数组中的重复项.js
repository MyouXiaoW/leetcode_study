/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 0;
  for(let quick=0;quick<nums.length;quick++){
      if(nums[quick]!==nums[slow]){
          nums[++slow] = nums[quick]
      }
  }
    
  return ++ slow;
    
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// @lc code=end

