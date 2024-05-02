'use strict';

let domain = "localhost"
let isActive = false
let items = [1,2,3,isActive,domain]
console.log(items)

let emptyArray = []
console.log(items.length)

let dizi = [10,20,30,40]
console.log(dizi)

dizi.push(50)
console.log("direkt ekleme (50) : ",dizi)

dizi.unshift(5)
console.log("başa eklemek (5) : ",dizi)

let lastitem = dizi.pop()
console.log("lastItem = ",lastitem,"dizi : ",dizi)

let firstitem = dizi.shift()
console.log("firstItem = ",firstitem,"dizi : ",dizi)

let a = dizi.toString() //dizi elemanlarını stringe cevirme
console.log(a)

console.log(dizi.join(" --- ")) // elemanların arasına çekilmis cizgi