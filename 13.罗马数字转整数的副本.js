/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map ={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900,
    },
    result=0;

    const resSplit = s.match(/(CM)|(CD)|(XC)|(XL)|(IX)|(IV)|(M)|(D)|(C)|(L)|(X)|(V)|(I)/g)
    
    resSplit.forEach((e)=>{
        result += map[e];
    })

    return result;

};

// @lc code=end

 
