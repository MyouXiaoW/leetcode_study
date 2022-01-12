/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

//substr
//substring
//slice
var longestCommonPrefix = function(strs) {
    if (strs.length===0 ||strs[0].length===0){return "";}

    var str=strs[0];

    for (let i=1,len=strs.length;i<len;i++){
        while(strs[i].indexOf(str)!==0) {
            if (str.length === 0) {return "";}
            str = str.substring(0, str.length - 1);
        }
    }
    
    return str;
    
};

console.log(longestCommonPrefix(["","",""]))



// @lc code=end

