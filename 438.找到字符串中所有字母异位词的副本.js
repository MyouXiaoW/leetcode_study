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
    let left =0;
    let right =0;
    let len = p.length;
    let res = [];
    let need ={}
    let valid =0;
    for(let v of p){
        need[v] = (need[v]|| 0) +1;
    }

    let window = {};

    while(right<s.length){
        let c = s[right];//获取当前的字符

        if(need[c]){//判断当前字符是否在目标字符
            window[c] = (window[c]|| 0)+1;
            if(window[c] === need[c]) //窗口中的字符和目标中的字符出现次数相同，验证+1
                valid++
            
        }
        right++
        
        while((right-left) === len){ //窗口的长度等于目标字符的长度
            let c = s[left];

            if(valid === Object.keys(need).length){ //窗口验证成功
                res.push(left);
            }
            
            if(need[c]){
                if(need[c] === window[c])
                valid--;
                window[c]--;
            }
            left++
        }

    }

    return res;
};

console.log('res',findAnagrams('abacbabc','abc'))
// @lc code=end

