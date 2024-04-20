'use strict';

document.getElementById('x').addEventListener('click', function(){
    const a = Number(document.querySelector('.girdi').value);
    
    if (90<=a && a<=100) {
       alert("Notunuz " + a +" AA ile geçtiniz!");
    }else if(85<=a && a<=89){
        alert("Notunuz "+ a +" BA ile geçtiniz!");
    }else if(80<=a && a<=84){
        alert("Notunuz "+ a +" BB ile geçtiniz!");
    }else if(75<=a && a<=79){
        alert("Notunuz "+ a +" CB ile geçtiniz!");
    }else if(70<=a && a<=74){
        alert("Notunuz "+ a + " CC ile geçtiniz!");
    }else if(65<=a && a<=69){
        alert("Notunuz "+ a +" DC ile geçtiniz!");
    }else if(60<=a && a<=64){
        alert("Notunuz "+ a +" DD ile geçtiniz!");
    }else if(50<=a && a<=59){
        alert("Notunuz "+ a +" FD, maalesef geçemediniz!");
    }else if(0<=a && a<=49){
        alert("Notunuz " + a +" FF ile Kaldınız!!");
    }else{
        alert("0 ile 100 arası bir not giriniz!");
    }
});