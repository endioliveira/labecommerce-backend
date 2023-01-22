-- Active: 1674347641172@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT
);

PRAGMA table_info ('users');

INSERT INTO users (id, email, password, created_at) 
VALUES ("1", "maria@labenu.com", "a1234", DATETIME('now')),
       ("2", "fernanda@labenu.com", "b1235", DATETIME('now')),
       ("3", "virginia_fonseca@gmail.com", "pa76543", DATETIME('now'));

DROP TABLE users;

SELECT * FROM users;

INSERT INTO users (id, email, password, created_at)
VALUES ("4", "adriana@gmail.com", "ad12345", DATETIME('now'));

DELETE FROM users
WHERE id = "2";

UPDATE users
SET email = "mariajulia@gmail.com"
WHERE id = "1";

SELECT * FROM users
ORDER BY email ASC;