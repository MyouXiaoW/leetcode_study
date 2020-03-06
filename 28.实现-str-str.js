/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// var strStr = function(haystack, needle) {
//     if(needle ==='')return 0;
//     let needleLen = needle.length;

//     for(let i=0;i<haystack.length;i++){
//         let partten = haystack.substr(i,needleLen);
//         let lastPart = haystack.substr(i);
//         if(partten ===needle)return i;
//         if(lastPart.length < needleLen)return -1;
//     }

//     return -1;
// };

var strStr = function(haystack, needle) {
    if(needle ==='')return 0;
    let sLen = haystack.length;
    let pLen = needle.length;

    let i =0;//主串位置
    let j=0;//模版字符串位置
    let m=pLen;//重新匹配的时候位置
    let k;//失配时候在模版串的位置
    

    while(i<sLen){

        if(haystack[i] !== needle[j]){

            //在下一次移动之前先在模版串中查找主串中的第m个字符
            //m本来应该是下一次比较的第一项
            //但是如果匹配到相同的字符，应该把第一项的位置向前移动m-k
            for(k = pLen -1;k>=0;k--){
                if(needle[k] === haystack[m]) break;
            }

            i = m-k;
            j=0;
            m=i+pLen;

            //如果下一次的第一项比主字符串的长度长就说明没有匹配到
            if(m>sLen)return -1;
        }else{
            if(j === (pLen-1))return i-j;

            j++;
            i++;
        }
    }
    
    return -1;
    
};

strStr('HERE IS A SIMPLE EXAMPLE','EXAMPLE')
// @lc code=end

