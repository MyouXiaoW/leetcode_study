/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = [].concat(nums);
    let index = k;
    let res = [];
    queue.length = k;

    while(index<nums.length+1){
        let max = queue[0];
        for(let i=1;i<queue.length;i++){
            if(queue[i] > max) max = queue[i];
        }
        res.push(max);
        if(index >= nums.length) break;
        queue.push(nums[index]);
        queue.shift();
        index ++ ;
    }

    return res;
};


maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)
// @lc code=end

