-- Active: 1674347641172@@127.0.0.1@3306
CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL UNIQUE NOT NULL,
    paid INTEGER NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO purchases (id, total_price, paid, buyer_id)
VALUES ("pu01", 35.00, 1, "1"),
       ("pu02", 45.00, 0, "1"),
       ("pu04", 92.25, 0, "3"),
    --    ("pu05", 30.40, 1, "3"),
       ("pu06", 100.00, 0, "4");

DROP TABLE purchases;

SELECT * FROM purchases;

-- UPDATE purchases
-- SET delivered_at = DATETIME('now')
-- WHERE id = "pu04";

SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id
WHERE users.id = "1";