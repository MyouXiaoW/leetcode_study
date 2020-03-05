/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false;

    let y=0,z=x;

    while(z!==0){
        y=y*10+z%10;
        z = ~~(z/10);
    }

    return  y === x;
};



console.log(isPalindrome(0))
// @lc code=end

