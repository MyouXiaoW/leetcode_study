/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {};
    let arr = [];
    for(let i=0;i<words.length;i++){
        if(!obj[words[i]]){
            obj[words[i]] =0;
        }else{
            obj[words[i]] ++;
        }
    }

    console.log(obj)
};
// @lc code=end

