"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
exports.products = [
    {
        id: "1",
        name: "body splash",
        price: 35.00,
        category: types_1.CATEGORY.COSMETICOS
    },
    {
        id: "2",
        name: "batom",
        price: 10.00,
        category: types_1.CATEGORY.MAQUIAGENS
    }
];
exports.purchases = [
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
];
function createUser(id, email, password) {
    const newUser = {
        id,
        email,
        password
    };
    exports.users.push(newUser);
    console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = {
        id,
        name,
        price,
        category
    };
    exports.products.push(newProduct);
    console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return exports.products.filter((product) => {
        product.id === idToSearch;
    });
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    const query = exports.products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase());
    });
    console.table(query);
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    exports.purchases.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchases.filter((purchase) => {
        return purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase());
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map