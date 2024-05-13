'use strict';


function denemeFonk(firstName){
    firstName = "deneme";
    return fonk(firstName);
}

function fonk(firstName){
    console.log(firstName);
    return firstName;
}

denemeFonk();

function denemeFat(lastName){
    console.log(`Merhaba ${lastName}`);
}
denemeFat("lastname");

const FatArrow = (lastName) => { console.log(`Merhaba ${lastName}`); }
FatArrow("LASTNAME FAT ARROW");

const FatArrow2 = (lastName, email) => { console.log(`Merhaba ${lastName} ${email}`); }
FatArrow2("LASTNAME FAT ARROW","email");


const FatArrow3 = (lastName, email) => { let a = (`Merhaba ${lastName} ${email}`);
console.log(a);
return a;}
FatArrow2("LASTNAME FAT ARROW2","email2");


let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
let counterEl = document.querySelector('.counter');
let yükselt = document.querySelector('.yükselt');
let düsür = document.querySelector('.düsür');

function yükselt1(){
    counterEl.textContent = counter +=1;
    console.log("yükselt");

    localStorage.setItem('counter',counter)
    console.log(typeof(counter))
}

function düsür1(){
    counterEl.textContent = counter -=1;
    console.log("düsür");

    localStorage.setItem('counter',counter)
    console.log(typeof(counter))
}

yükselt.addEventListener('click', yükselt1)
düsür.addEventListener('click',düsür1)
