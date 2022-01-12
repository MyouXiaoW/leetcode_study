/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const n=matrix.length;
    let res = [];
    if(!n)return res;
    const m = matrix[0].length;
    const visited = Array.from({length:n}).map(()=>[]);
    let index = 0;
    let dirs = [
        [1, 0], // 右
        [0, 1], // 下
        [-1, 0], // 左
        [0, -1], // 上
      ];
    const isValid = (x,y)=>{
        return y >= 0 && y < n && x >= 0 && x < m && !visited[y][x];
    };

    const backtrack = (x,y)=>{
        res.push(matrix[y][x]);
        visited[y][x]=true;

        if(res.length ===m*n) return;
        let [diffX,diffY] = dirs[index%4];
        let nextX = x + diffX;
        let nextY = y + diffY;
        if(!isValid(nextX,nextY)){
            [diffX,diffY] = dirs[++index%4];
            nextX = x + diffX;
            nextY = y + diffY;
        }
        backtrack(nextX,nextY);
    }
    backtrack(0,0)
    return res;
};

spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ])
// @lc code=end

