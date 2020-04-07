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
    
    let len = nums1.length-1;
    m = m-1;
    n = n-1

    while(m>=0  || n >=0){

        if(n<0)break;
        nums1[len] =  Number(nums1[m])> nums2[n] ? nums1[m--]:nums2[n--];
        len --;
    }

    
    console.log(nums1);
};

merge([0,0,3,0,0,0,0,0,0],3,[-1,1,1,1,2,3],6)

// @lc code=end

