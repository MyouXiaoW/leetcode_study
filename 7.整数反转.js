/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var max = Math.pow(2, 31) - 1;
    var min = -Math.pow(2, 31);
    var y = 0;
    while(x !== 0) {

        //x%10获取最后一位
        y = 10 * y + x % 10;

        // 去除小数
        x = ~~(x/10);
    }
    if (y > max) return 0;
    if (y < min) return 0;
    return y;
};

console.log(reverse(100000))
// @lc code=end

