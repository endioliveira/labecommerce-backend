import { CATEGORY, TUser, TProduct, TPurchase } from "./types"

export const users: TUser[] = [
    {
        id: "1",
        email: "maria@labenu.com",
        password: "a1234",
    },
    {
        id: "2",
        email: "fernanda@labenu.com",
        password: "b1235",
    }
]

export const products: TProduct[] = [
    {
        id: "1",
        name: "body splash",
        price: 35.00,
        category: CATEGORY.COSMETICOS
    },
    {
        id: "2",
        name: "batom",
        price: 10.00,
        category: CATEGORY.MAQUIAGENS
    }
]

export const purchases: TPurchase[] = [
    {
        userId: "1",
        productId: "1",
        quantity: 2, 
        totalPrice: 70
    }, 
    {
        userId: "2",
        productId: "2",
        quantity: 1, 
        totalPrice: 10
    }
]

// createUser (cria uma nova pessoa na lista de users)
export function createUser(id: string, email: string, password: string): void {
    const newUser: TUser = {
        id,
        email,
        password
    }
    users.push(newUser)
    console.log("Cadastro realizado com sucesso")
}

// getAllUsers (busca todas as pessoas da lista de users)
export function getAllUsers(): TUser[] {
    return users
}

//createProduct (cria um novo produto na lista de products)
export function createProduct (id: string, name: string, price: number, category: CATEGORY): void {
    const newProduct: TProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    console.log("Produto criado com sucesso")
}

//getAllProducts (busca todos os produtos da lista de products)
export function getAllProducts(): TProduct[] {
    return products
}

// getProductById (busca por produtos baseado em um id da lista de products)
export function getProductById(idToSearch: string): TProduct[] | undefined {
    return products.filter((product) => {
        product.id === idToSearch
    })
}

//queryProductsByName (busca por produtos baseado em um nome da lista de products)
export function queryProductsByName(q: string): void {
    const query = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    console.table(query)
}

//createPurchase (cria uma nova compra na lista de purchases)
export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number): void {
    const newPurchase: TPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }
    purchases.push(newPurchase)
    console.log("Compra realizada com sucesso")
}

// getAllPurchasesFromUserId (busca todas as compras feitas baseado no id do usuário)
export function getAllPurchasesFromUserId(userIdToSearch: string): TPurchase[] {
    return purchases.filter((purchase) => {
        return purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase())
    })
}
