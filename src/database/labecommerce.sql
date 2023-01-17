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
