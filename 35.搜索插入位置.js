/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.23%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    125.8K
 * Total Submissions: 278.3K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     for(let i=0;i<nums.length;i++){


//         if(nums[0]>=target)return 0;
//         if(nums[nums.length-1]<target)return nums.length;

//         if(nums[i]>=target){
//             nums.splice(i-1,0,target)
//             return i
//         }
//     }
// };

//二分查找有序数组
var searchInsert = function(nums, target) {
    let len = nums.length,
        left = 0,
        right = len - 1;
    

    while(left < right){
        //边界条件比较难判断
        //为了找到比target大的值？
        let middle = ~~((left+right+1)/2);
        
        if(nums[middle]>target){
            right = middle-1;
        }else{
            //因为会出现相当的情况，所以这里+1
            left = middle;
        }
    }
    
    
    return target > nums[right] ? right+1:right;
};


console.log(searchInsert([1,3,5,6],5))

// @lc code=end

