-- Active: 1673884523233@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

PRAGMA table_info ('users');

INSERT INTO users (id, email, password) 
VALUES ("1", "mirella_santos@gmail.com", "mi12345"),
       ("2", "marjorie_oliveira@gmail.com", "ma54321"),
       ("3", "virginia_fonseca@gmail.com", "pa76543");

DROP TABLE users;

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

SELECT * FROM products;

INSERT INTO products (id, name, price, category)
VALUES ("p01", "Body Splash", 35.00, "Cosméticos"),
       ("p02", "Colar de prata", 22.50, "Acessórios"),
       ("p03", "Pulseira", 17.50, "Acessórios"),
       ("p04", "Delineador", 30.75, "Maquiagens"),
       ("p05", "Batom Matte", 15.20, "Maquiagens");

SELECT * FROM users;

SELECT * FROM products;

SELECT * FROM products
WHERE name = "Body Splash";

INSERT INTO users (id, email, password)
VALUES ("4", "adriana@gmail.com", "ad12345");

INSERT INTO products (id, name, price, category)
VALUES ("p06", "Perfume", 100.00, "Cosméticos");

SELECT * FROM products
WHERE id = "p04";

DELETE FROM users
WHERE id = "2";

DELETE FROM products
WHERE id = "p03";

UPDATE users
SET email = "mariajulia@gmail.com"
WHERE id = "1";

UPDATE products
SET name = "Gloss Pink"
WHERE id = "p05";

SELECT * FROM users
ORDER BY email ASC;

SELECT * FROM products
ORDER BY price ASC
LIMIT 20
OFFSET 0;

SELECT * FROM products
WHERE price >= 20 AND price <= 35 
ORDER BY price ASC;

-- EXERCÍCIOS DE RELAÇÕES EM SQL I - DATA 18-01-23

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL UNIQUE NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO purchases (id, total_price, paid, delivered_at, buyer_id)
VALUES ("pu01", 70.00, 1, NULL,"1"),
       ("pu02", 45.00, 0,NULL, "1"),
       ("pu03", 17.50, 1, NULL, "2"),
       ("pu04", 92.25, 0, NULL, "3");

DROP TABLE purchases;

SELECT * FROM purchases;

UPDATE purchases
SET delivered_at = DATETIME('now')
WHERE id = "pu04";

SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id
WHERE users.id = "1";