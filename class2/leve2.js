var ary = [1, [2, [3, [4, 5]]], 6];

function even(arr) {
    var newArr=[];
    for(var i = 0; i< arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(even(arr[i]));
             
        }else{
            newArr.push(arr[i]);
        }
    }
  return newArr;

}
console.log(even(ary));

