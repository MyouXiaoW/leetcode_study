/*
 * @lc app=leetcode.cn id=1291 lang=javascript
 *
 * [1291] 顺次数
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
   let res = [];
   const backtrack =(current,tail)=>{
        if(current >high)return;
        if(current>=low && current <=high){
            res.push(current);
        }
        if(tail<9){
            backtrack(current*10+tail+1,tail+1)
        }

    }   
    for(let i=1;i<9;i++){
        backtrack(i,i);
    }
    
    return res.sort((a,b)=>a-b);
   
};
sequentialDigits(100,1300);
