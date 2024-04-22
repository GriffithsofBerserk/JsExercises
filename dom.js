'use strict';

let baslik = document.querySelector('.baslik');

baslik.addEventListener('click', domClick)

function domClick(){
    console.log("tiklandi.");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
}