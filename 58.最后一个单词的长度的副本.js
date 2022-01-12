/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const str = s.trim().split(' ');

   return str.length > 0 ? str[str.length-1].length : 0;
};
console.log(lengthOfLastWord("a "));

// @lc code=end

