'use strict';

let names = ["Robert","Daniele","Florian","Tulio"]

const ifuserListDOM = document.querySelector('#userList')


let index = 0
for(;index < names.length;index++){
    if(names[index] == "Florian"){continue}
    const liDOM = document.createElement('li')
    liDOM.innerHTML = names[index]
    ifuserListDOM.appendChild(liDOM)

}

let userNm = ""

while(!userNm){
    userNm = prompt("Kullanıcı adınızı girin!")
    console.log(userNm)
}