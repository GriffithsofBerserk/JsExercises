const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"]

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