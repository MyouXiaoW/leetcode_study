/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //有一种是用API的方法,但是这种计算量会超出计算机的承受能力
    // a = parseInt(a,2);
    // b = parseInt(b,2);
    // return (a+b).toString(2);
    a = a.split('').map(Number);
    b = b.split('').map(Number);
    let len = a.length > b.length ? a.length : b.length;

    while(a.length !=len+1) a.unshift(0);
    while(b.length !=len+1) b.unshift(0);

    let c = Array(len+1).fill(0);


    for(let i = len;i>=0;i--){
        const sum = a.pop() + b.pop();
        c[i] = c[i] + sum;
        if(c[i] > 1){
            c[i-1] = c[i-1] + 1
            c[i] = c[i]-2
        };
    }
    
    if(!c[0])c.shift();

    return c.join('')
};

console.log(addBinary('11','0'))
// @lc code=end

