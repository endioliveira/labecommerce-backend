import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database"
import { CATEGORY } from "./types"

console.log(users)
console.log(products)
console.log(purchases)

console.log(createUser("3", "lorena@labenu.com", "c1345"))

console.table(getAllUsers())

console.log(createProduct("3","Colar de coração", 25.00, CATEGORY.ACESSORIOS ))

console.table(getAllProducts())

console.log(getProductById("3"))

console.table(queryProductsByName("Colar"))

console.log(createPurchase("3", "3", 3, 75))

console.log(getAllPurchasesFromUserId("3"))