'use strict'

let laptop1 = {
    brand : "Apple",
    model : "Macbook Pro",
    "2kg" : "2"
}

console.log(laptop1)
console.log(laptop1.brand)
console.log(laptop1.model)
console.log(laptop1["2kg"])

laptop1.brand = "Mac"
laptop1.version = "10.5.2"
console.log(laptop1)

const keys = Object.keys(laptop1) //anahtar bilgilerine ulasmak icin Object.keys() values icin Object.values()

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

let user1 = {
    firstName : "Deneme",
    lastName : "Denemeoglu",
    score : [1,2,3,4,5],
    isActive : true,
    longName : function() { return `${this.firstName[0].toUpperCase()} ${this.lastName}`}
}

console.log(user1.longName())


let score = [100,200,300,400]

let [score1,score2, ...otherscore] = score

console.log(score1," : score1")
console.log(otherscore)