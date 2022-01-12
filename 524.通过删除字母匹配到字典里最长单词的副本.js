/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let maxLen=0,res='',index=-1;
    for(let i=0;i<d.length;i++){
        let v = find(s,d[i]) ;

        console.log(v)
    if(res.length ===v.length && d[i]<d[index] || maxLen<v.length ){
        maxLen = v.length;
        index = i;
        res = v
    }
        
    }

    return res;
 function find(s,word){
    let i=0, j=0,res='',count = 0;
    while(i<s.length && j<word.length && word.length-j +count >=maxLen){

        if(s[i] ===word[j]){
            j++
            res+=s[i]
            count ++ 
        }
        i++
    }

    return res === word ? word : ''
 }
};

// var findLongestWord = function (s, d) {
//     let maxL = 0
//     let ind = -1
//     for (let i = 0; i < d.length; i++) {
//       let now = find(s, d[i], maxL)  // 将d中每一个字符串与s进行对比
//       // 1、如果d[i]的匹配字符个数与记录中的maxL相同，取字典序小的那个
//       // 2、如果d[i]的匹配字符个数比记录中的maxL大，需要更新
//       if ((maxL === now && d[i] < d[ind]) || maxL < now) {
//         maxL = now
//         ind = i
//       }
//     }
//     function find(s, w, max) {
//       let i = 0
//       let j = 0
//       let count = 0
//       while (i < s.length && j < w.length && w.length - j + count >= max) {
//         // 如果剩余长度+已匹配字符数>=max才有继续匹配的必要
//         if (s[i] === w[j]) {
//           j++
//           count++
//         }
//         i++
//       }
//       if (count === w.length) {
//         return count
//       } else {
//         return 0
//       }
//     }
//     return d[ind] === undefined?'':d[ind]
//   };
  
  
  

findLongestWord('bab',["ba","ab","a","plea"]
)
// @lc code=end

