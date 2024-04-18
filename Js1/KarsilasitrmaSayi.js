'use strict';

let x = prompt("x değerini girin : ", x);
let y = prompt("y değerini girim : ", y);

if (x>y) {
    alert("X büyük");
}else if(x===y){
    alert("x ve y eşit");
}else{
    alert("y büyük");
}