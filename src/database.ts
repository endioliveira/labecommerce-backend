import { TUser, TProduct, TPurchase } from "./types"

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
        category: "cosmeticos"
    },
    {
        id: "2",
        name: "batom",
        price: 10.00,
        category: "maquiagens"
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