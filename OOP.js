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
console.log(laptop1)