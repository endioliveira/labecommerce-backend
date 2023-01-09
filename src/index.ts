import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database"
import { CATEGORY, TProduct, TPurchase, TUser } from "./types"
import express, { Request, Response} from 'express'; //importando o express, também precisamos importar os objetos Request e Response, sempre entre chaves {}
import cors from 'cors';

// console.log(users)
// console.log(products)
// console.log(purchases)

// console.log(createUser("3", "lorena@labenu.com", "c1345"))
// console.table(getAllUsers())
// console.log(createProduct("3","Colar de coração", 25.00, CATEGORY.ACESSORIOS ))
// console.table(getAllProducts())
// console.log(getProductById("3"))
// console.table(queryProductsByName("Colar"))
// console.log(createPurchase("3", "3", 3, 75))
// console.log(getAllPurchasesFromUserId("3"))

const app = express(); //invocando a função express() dentro da variável app 
app.use(express.json()); //configuração do middleware que garante que nossas respostas estejam sempre no formato json
app.use(cors()); //configuração do middleware que habilita o CORS 


app.listen(3001, () => {
    console.log("servidor rodando na porta 3003")
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.get("/product/search", (req: Request, res: Response) => {
    const q = req.query.q as string 
    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send(result)
})

app.post("/users", (req: Request, res: Response) => {

    const { id, email, password } = req.body as TUser

    const newUser = {
        id,
        email, 
        password
    }

    users.push(newUser)
    res.status(201).send("Cadastro realizado com sucesso!")
})

app.post("/products", (req: Request, res: Response) => {
    const { id, name, price, category} = req.body as TProduct

    const newProduct = {
        id,
        name, 
        price,
        category
    }

    products.push(newProduct)
    res.status(201).send("Produto cadastrado com sucesso!")
    
})

app.post("/purchases", (req: Request, res: Response) => {
    const { userId, productId, quantity, totalPrice} = req.body as TPurchase

    const newPurchase = {
        userId,
        productId, 
        quantity,
        totalPrice
    }

    purchases.push(newPurchase)
    res.status(201).send("Compra realizada com sucesso!")
    
})