-- Active: 1674347641172@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

PRAGMA table_info ('users');

INSERT INTO users (id, name, email, password ) 
VALUES ("1", "Maria Júlia", "maria@labenu.com", "a1234"),
       ("2", "Fernanda", "fernanda@labenu.com", "b1235"),
       ("3", "Virginia", "virginia_fonseca@gmail.com", "pa76543");

DROP TABLE users;

SELECT * FROM users;

INSERT INTO users (id, name, email, password)
VALUES ("4", "Adriana","adriana@gmail.com", "ad12345");

DELETE FROM users
WHERE id = "2";

UPDATE users
SET email = "mariajulia@gmail.com"
WHERE id = "1";

SELECT * FROM users
ORDER BY email ASC;