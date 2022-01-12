/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [],symbol={'+':(a,b)=>a+b,'*':(a,b)=>a*b,'-':(a,b)=>b-a,'/':(a,b)=>~~(b/a)},i=0;

    while(i<tokens.length){
        let a = tokens[i];
        let operation = symbol[a];
        if(operation){
          let n=  operation(Number(stack.pop()),Number(stack.pop()));
          stack.push(n);
        }else{
            stack.push(a);
        }
        i++
    }
    return stack[0]
};
//["4", "13", "5", "/", "+"]
// evalRPN(["4", "13", "5", "/", "+"])
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// @lc code=end

