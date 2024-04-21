'use strict';


function denemeFonk(firstName){
    firstName = "deneme";
    console.log(`Merhaba ${firstName}`);
    return fonk(firstName);
}

function fonk(firstName){
    console.log(firstName);
    return firstName;
}

denemeFonk();
