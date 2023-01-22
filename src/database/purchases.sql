-- Active: 1674347641172@@127.0.0.1@3306
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