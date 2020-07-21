/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>(a-b))
    let sum,res;
    let min;
    for(let i=0;i<=nums.length-3;i++){
        let left = i+1;
        let right = nums.length-1
        while(left < right){
             sum = nums[i] + nums[left]+nums[right];
            let diff = Math.abs(sum - target);

            if(!min || diff < min){
                min = diff
                res = sum
            }
            

            if(sum > target){
                right --
            }else if(sum < target){
                left ++ 
            }else{
                return sum
            }
        }
        
    }
    return res
};
threeSumClosest([-1,2,1,-4],1)

// @lc code=end

