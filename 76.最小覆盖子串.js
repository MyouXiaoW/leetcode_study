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
   let minLen = Infinity,resL,left =0,right=0,missType =0,map={};

   for(let v of t){
    if(!map[v]){
        map[v] = 1;
        missType ++;
    }else{
        map[v]++;
    }
   }



   while(right<s.length){
    //窗口右侧扩张
    let rightStr = s[right];
    map[rightStr]!=undefined && map[rightStr]--;
    map[rightStr]===0 && missType--;
    //
    //窗口左侧收缩
    while(missType===0){
        if(minLen>right-left+1){
            minLen = right -left+1;
            resL = left;
        }
        let leftStr = s[left];
        map[leftStr] != undefined && map[leftStr]++;
        map[leftStr]>0 && missType++;

        left++;
    }
    right++
   }
   
   return s.substring(resL,minLen+resL);

};

console.log(minWindow("a","aa"))

// @lc code=end

