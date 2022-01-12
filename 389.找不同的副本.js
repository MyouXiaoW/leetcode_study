/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) { 
    if(s.length ===0) return t
    const map = {};
    for(let i=0;i<t.length;i++){
        if(map[s[i]]){
            map[s[i]] ++
        }else if(s[i] !== undefined){
            map[s[i]] = 1
        }

        if(map[t[i]]){
            map[t[i]] --
        }else{
            map[t[i]] = -1
        }
    }

    for(let key in map){
        if(map[key])return key
    }
};

findTheDifference('abcd','abcde')
// @lc code=end

