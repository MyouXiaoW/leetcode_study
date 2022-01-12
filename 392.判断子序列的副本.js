/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s ) return true;
let sLen = s.length,tLen = t.length,i=0,j=0,res='';
while(i<sLen&& j<tLen){
    if(s[i] ===t[j]){
        res+=s[i];
        i++ ;
    } 
    j++
}
console.log(res )
return res ===s 
};
isSubsequence('abc','ahbgdc')
// @lc code=end

