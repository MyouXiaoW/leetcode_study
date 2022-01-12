/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
 function createMap(v){
    let map = new Map();
    for( let value of v ){
        const count =map.get(value) 
       if(count){
           map.set(value,count+1)
       }else{
        map.set(value,1)
       }
    }

    return map
 }

 let res = [];

 let map1 = createMap(nums1)
 let map2 = createMap(nums2)

 for(let key of map1.keys()){
     const count1 = map1.get(key)
     const count2 = map2.get(key)

     if (count2) {
        const pushCount = Math.min(count1, count2)
        for (let i = 0; i < pushCount; i++) {
          res.push(key)
        }
      }
 }
console.log(res)
 return res;

};

intersect([1,2,2,1],[2,2])
// @lc code=end

