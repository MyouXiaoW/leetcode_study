/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen =0,map=new Map(),left=0,right=0;

    while(right<s.length){
        if(map.has(s[right])){
            left = Math.max(map.get(s[right])+1,left)
        }
        maxLen = Math.max(maxLen,right-left+1);
        map.set(s[right],right);
        right++
    }
    return maxLen;
};

lengthOfLongestSubstring(' ')
// @lc code=end

