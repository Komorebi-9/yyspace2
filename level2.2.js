/* 2.数组扁平化
   例：
   输入：[[1, 2], [3, 4], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
   输出：[ 1, 2, 3, 4, 6, 7,  9, 11, 12, 12, 13, 14, 10 ] */

var arr=[[1, 2], [3, 4], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10];
function flatten(arr) {
    var res=[];
    arr.map(item =>{
        if(Array.isArray(item)){
            res=res.concat(flatten(item));
        } else {
            res.push(item);
        }
    });
   return res;   
}
arr=flatten(arr);
console.log(arr);