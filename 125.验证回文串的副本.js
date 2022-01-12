/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str  = s.replace(/\W|_/g,'').toLowerCase() ;
    let sLen = str.length;
    let left =0,right = sLen-1;
    console.log(str)
    while(left<right){
        if(str[left] !==str[right]) return false;

        left++;
        right--        
    }
    return true;
};


//"race a car"
console.log(isPalindrome("A man, a plan, a canal: Panama"))

// @lc code=end

