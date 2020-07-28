/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let left = 0,right=0,min = Infinity,sum =0;

    while(right<nums.length){
        sum+=nums[right]
        while(sum>=s){
            if(min > right-left+1){
                min = right-left+1;
            }
            sum-=nums[left];
            left++
        }
       
        right++
    }
    return min===Infinity ? 0:min;
};
console.log(minSubArrayLen(7,[]))

// @lc code=end

