// 将字符串里每个单词的首字母变为大写
var str = 'today is a happy day'
function change(str){
 var arr=str.toLowerCase().split(" ");
 var result=arr.map(function (val) {
      return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
});
return result.join(" ");
}
str=change(str) ;    //'Today Is A Happy Day'
alert(str) ;
