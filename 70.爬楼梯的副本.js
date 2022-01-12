/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


//这种性能太差了，需要一直递归计算
//提交的时候直接超时了
// var climbStairs = function(n) {
//     if(n===0) return 1
//     if(n===1) return 1
//     return climbStairs(n-1) , climbStairs(n-2);
// };


// var climbStairs = function(n) {
//     var f1 = 2;
//     var f2 = 3;
//     var f3 = 0;
//     if(n <= 3){
//         return n;
//     }
//     while(n>3){
//         f3 = f2 + f1;
//         f1 = f2;
//         f2 = f3;
//         n--;
//     }
//     return f2;
// };


var climbStairs = function(n) {
    // 求第n步 所以索引到n
    var dp = new Array(n+1);
    if(n <= 3){
        return n;
    }
    dp[1] = 1;
    dp[2] = 2;
    for(var i = 3;i<=n;i++){
        dp[i] = dp[i-2] + dp[i-1];
    }
    return dp[n];
};

console.log(climbStairs(44))
// @lc code=end

