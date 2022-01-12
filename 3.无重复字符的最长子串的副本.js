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
    let left = 0;
    let right =0;
    let window = {};
    let len = -1;

    while(right<s.length){
        let c = s[right];
        window[c] =( window[c] || 0) +1;
        right++;

        while(window[c]>1){
            let v = s[left];
            if(window[v])window[v]--;
            left++;
        }
        if(len < right-left) len = right-left;
    }
    return len === -1 ?  0 : len;
};

console.log('res',lengthOfLongestSubstring(''))
// @lc code=end

