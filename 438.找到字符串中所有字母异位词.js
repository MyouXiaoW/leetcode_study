/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let i =0,sLen = s.length,pLen = p.length,code = p.charCodeAt(),res =[];
    while(i<sLen-2){
        let temp = s.substr(i,pLen);
        if(temp.charCodeAt() ===code){
            console.log(temp)
            res.push(i)
        }
        i++
    };
    console.log(res);
    return res
};

findAnagrams('cbaebabacd','abc')
// @lc code=end

