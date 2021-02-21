//1.写一个函数对传入的数组进行冒泡排序。
var arr=[1,3,4,3,7,5,2,0];
var n=arr.length;
function bubbleSort(arr,n){
    for(var i=0;i<n-1;i++){
        for(var j=0;j<n-1-i;j++){
            if(arr[j]<arr[j+1]){    //倒序排列
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
bubbleSort(arr,n);
console.log(arr);