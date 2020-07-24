/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gLen  = g.length,sLen = s.length,i=0,j=0;
    if(!gLen || !sLen) return 0
    g= g.sort((a,b)=>a-b);
    s= s.sort((a,b)=>a-b);


    while(i<gLen && j<sLen){
        if(g[i] <= s[j]){
            i++
        }
        j++
    }
    return i
};
findContentChildren([10], [1,1,2,3,4,5])
// @lc code=end

