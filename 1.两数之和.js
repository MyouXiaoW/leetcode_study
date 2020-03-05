/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for( let i in nums){
        map.set(nums[i],Number(i))
    }

    for(let j=0;j<nums.length;j++){
        
        if(map.has(target - nums[j])&& map.get(target - nums[j])!==j){
            return [j,map.get(target-nums[j])]
        }
    }
}
// @lc code=end

