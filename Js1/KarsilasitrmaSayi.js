'use strict';

var x = document.getElementById('x').value;
var y = document.getElementById('y').value;

console.log(x);
console.log(y);
document.getElementById('.y').addEventListener('.click', function(){
    if (x>y) {
        alert("X büyük");
    }else if(x===y){
        alert("x ve y eşit");
    }else{
        alert("y büyük");
    }
});
