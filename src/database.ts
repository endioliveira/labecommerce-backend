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
        userId: "u1",
        productId: "p1",
        quantity: 2, 
        totalPrice: 70
    }, 
    {
        userId: "u2",
        productId: "p2",
        quantity: 1, 
        totalPrice: 10
    }
]

export function createUser(id: string, email: string, password: string): void {
    const newUser: TUser = {
        id,
        email,
        password
    }
    users.push(newUser)
    console.log("Cadastro realizado com sucesso")
}

export function getAllUsers(): TUser[] {
    return users
}

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

export function getAllProducts(): TProduct[] {
    return products
}

export function getProductById(idToSearch: string): TProduct[] | undefined {
    return products.filter((product) => {
        product.id === idToSearch
    })
}

