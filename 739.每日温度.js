/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = [];
    let index = 0;
    let res = Array(T.length).fill(0);

    while(index < T.length){
        while(stack.length && T[index]>T[stack[stack.length-1]]){
            let stackPop = stack.pop();
            res[stackPop] = index - stackPop;
        }

        stack.push(index);
        index ++
    }
    return res;
};

dailyTemperatures([73,74,75,71,69,72,76,73])
// @lc code=end

