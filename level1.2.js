//2.统计数组 arr 中值等于n的元素出现的次数
var arr=[1,2,3,4,1,2,3,1],n=1;
function count(arr,n){
    var num=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==n) num++;
    }
    return num
  }
  var num=count(arr,n);
  console.log(num);