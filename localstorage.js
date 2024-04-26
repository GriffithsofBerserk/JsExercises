'use strict';

let user = { userName : "denemeDeneme", isActive : true}
console.log(user)
localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")
userInfo = JSON.parse(userInfo)
console.log(userInfo)