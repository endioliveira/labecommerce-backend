"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
console.log(database_1.users);
console.log(database_1.products);
console.log(database_1.purchases);
console.log((0, database_1.createUser)("3", "lorena@labenu.com", "c1345"));
console.table((0, database_1.getAllUsers)());
console.log((0, database_1.createProduct)("3", "Colar de coração", 25.00, types_1.CATEGORY.ACESSORIOS));
console.table((0, database_1.getAllProducts)());
console.log((0, database_1.getProductById)("3"));
console.table((0, database_1.queryProductsByName)("Colar"));
console.log((0, database_1.createPurchase)("3", "3", 3, 75));
console.log((0, database_1.getAllPurchasesFromUserId)("3"));
//# sourceMappingURL=index.js.map