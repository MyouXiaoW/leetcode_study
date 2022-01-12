/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj = {}
    
    for(let i=97;i<123;i++){
        obj[String.fromCharCode(i)]=0
    }

    for(let j=0;j<s.length;j++){
        obj[s[j]]++
        obj[t[j]]--
    }

    return Object.keys(obj).every(e=>obj[e]==0)

};

console.log(isAnagram('anagram',"nagaram"))
// @lc code=end

