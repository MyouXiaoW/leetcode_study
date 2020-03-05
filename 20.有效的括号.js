/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

 /**
  * 
  * 遵循后进先出原则
  */
var isValid = function(s) {

    var Json = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c in Json) {
            var template = stack.length != 0 ? stack.pop() : '#';
            if (template !== Json[c]) {
                return false;
            }

        } else {
            stack.push(c);
            console.log(stack)
        }
    }

    return stack.length == 0;

};




console.log(isValid('([)]'))
// console.log(isValid('()[]{}'))
// console.log(isValid('{[]}'))
// console.log(isValid("[([]])"))


// @lc code=end

