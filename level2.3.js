//3.写一个函数放入sort中实现将一个对象数组按数组中某个属性排序
let arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}]
function compare (property) {
    return function (a,b) {
        var value1=a[property];
        var value2=b[property];
        return value1-value2;
    }
} 
arr.sort(compare('id'));
console.log(arr);
//[{id:2,name:'mama'},{id:8,name:'hy'},{id:10,name:'kc'},{id:15,name:'pipi'}]
