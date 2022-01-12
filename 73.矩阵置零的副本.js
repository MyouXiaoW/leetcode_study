/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(!matrix.length) return matrix;
    let position= matrix.reduce((res,v,i)=>{
        let position = [];
        for(let j=0;j<v.length;j++){
            if(v[j]===0){
                position.push([j,i])
            }
        }

        return res.concat(position);
    },[])

    position.forEach((e,)=>{
        matrix[e[1]].fill(0);
        matrix.forEach((v,i)=>{
            v.forEach((val)=>{
                matrix[i][e[0]]=0
            })
        })
    })
    
    return matrix;
};


setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]
)
// @lc code=end

