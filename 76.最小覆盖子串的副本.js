/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left =0;
    let right = 0;
    let start = 0;
    let len = Number.MAX_VALUE;
    let need = {};
    for(let v of t){
        need[v] = (need[v] || 0) + 1;
    }
    let valid = 0;

    let window = {};
    while(right<s.length){
        let v = s[right];
        
        if(need[v]){
            window[v] = (window[v] || 0 )+1
            if(window[v] === need[v]){
                valid++
            }
        }
        right++;

        //窗口确定后在
        while(valid === Object.keys(need).length){
            if (right - left < len) {
                start = left;
                len = right - left;
              }
    
            let v = s[left];
            if(need[v]){
                if(window[v] === need[v]){
                    valid--;
                }
                window[v]--;
            }
            left++
        }
    }

    return len !== Number.MAX_VALUE ? s.substr(start,len) : ''
};



console.log(minWindow("ADOBECODEBANC","ABC"))


// @lc code=end

