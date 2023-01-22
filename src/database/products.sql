-- Active: 1674347641172@@127.0.0.1@3306
CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

INSERT INTO products (id, name, price, category, description, image_url)
VALUES ("p01", "Body Splash", 35.00, "Cosméticos","Body Splash Desodorante Corporal", "https://giovannababy.vteximg.com.br/arquivos/ids/158088-1200-1200/BS_Classic.jpg?v=637685181526570000"),
       ("p02", "Colar de prata", 22.50, "Acessórios", "Colar Ponto de Luz Duplo confeccionado na Prata 925", "https://i.pinimg.com/564x/c5/e6/13/c5e613705052f96d3fd5e258f8be0d26.jpg"),
       ("p03", "Pulseira", 17.50, "Acessórios", "Pulseira lilás com pingente de flores", "https://i.pinimg.com/564x/45/6b/7a/456b7a9f5d8f6c762cadcb28e3293006.jpg"),
       ("p04", "Delineador", 30.75, "Maquiagens", "Delineador líquido", "https://i.pinimg.com/564x/8d/c1/94/8dc194370af2543a43c812dcfc96acb1.jpg"),
       ("p05", "Batom Matte", 15.20, "Maquiagens", "Batom Matte Rosa Longa duração", "https://i.pinimg.com/564x/f8/92/bd/f892bde05dcc9afefa4bda3cae408323.jpg");

SELECT * FROM products;

DROP TABLE products;

SELECT * FROM products
WHERE name = "Body Splash";

INSERT INTO products (id, name, price, category, description, image_url)
VALUES ("p06", "Perfume", 100.00, "Cosméticos", "Egeo Cherry Blast", "https://i.pinimg.com/564x/4e/4a/a3/4e4aa38167b4fd623bf85c1fa6a9197a.jpg");

SELECT * FROM products
WHERE id = "p04";

DELETE FROM products
WHERE id = "p03";

UPDATE products
SET name = "Lip Tint"
WHERE id = "p05";

SELECT * FROM products
ORDER BY price ASC
LIMIT 20
OFFSET 0;

SELECT * FROM products
WHERE price >= 20 AND price <= 35 
ORDER BY price ASC;