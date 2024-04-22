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