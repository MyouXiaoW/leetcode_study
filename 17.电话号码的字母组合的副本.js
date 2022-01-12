/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return [];
    const keyboard = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }
    const arg = [];

    for(let v of digits){
        arg.push(keyboard[v])
    }
    

    let res = [];

    function combine(index,pre){
        if(!arg[index]) {
            res.push(pre);
            return;
        };
        for(let v of arg[index]){
            let cur = pre+v;
            
            combine(index+1,cur);
            
        }
        
    }

    combine(0,'');

    return res;
};
letterCombinations('236')

// @lc code=end

