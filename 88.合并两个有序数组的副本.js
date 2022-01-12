/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let index = m+n-1;
  while(n>0){
     if(nums1[m-1]>nums2[n-1]){
        nums1[index] = nums1[m-1]
        m--
     }else{
         nums1[index] = nums2[n-1]
         n--
     }
     index --
    
  }
  console.log(nums1)
};

merge([1,2,3,0,0,0],3,[2,5,6],3)

// @lc code=end

