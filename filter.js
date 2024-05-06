const PRODUCTS = ["MiC","CaBLE","SPEAKER","DeSKtOP PC","SerVEr","MOUSE","KeyBoaRD"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5) //uzunlukları 5ten buyukleri filtreleme
console.log(NEW_PRODUCTS)

const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

const ACTIVE_USERS = USERS.filter(active => active.isActive === true)
console.log(ACTIVE_USERS)

const ProdObj = PRODUCTS.map(prod => {
    return{
        userName: prod, shortName: `${prod[0]}.`,newName: `${prod[0].toUpperCase()}${prod.slice(1).toLowerCase()}`
    }
})

console.log(ProdObj)