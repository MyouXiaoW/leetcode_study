/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    let len = nums.length
    
    while(i < len) {
        if(nums[i] == val) {     
            nums[i] = nums[len - 1]  
            len--
        } else {
            i++
        }
    }
    return len
};
// @lc code=end

