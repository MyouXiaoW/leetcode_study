/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left =0;
    let right =0;
    let len = s1.length;
    let need = {};

    for(let v of s1 ){
        need[v] = (need[v] || 0) + 1
    }
    let window = {}
    let valid = 0;
    while(right< s2.length){
        let c = s2[right];

        if(need[c]){
            window[c] = (window[c] || 0) +1
            if(need[c]===window[c]) valid++
        }
        right++

        while((right-left) === len){

            if(valid === Object.keys(need).length) return true;

            let c= s2[left];

            if(need[c]){
                if(window[c]===need[c]) valid--
                window[c]--
            }

            left++
        }
    }

    return false;
};
console.log(checkInclusion('trinitrophenylmethylnitramine','dinitrophenylhydrazinetrinitrophenylmethylnitramine'))
// @lc code=end

