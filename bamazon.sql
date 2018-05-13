CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('The Great Gatsby', 'Books', 14.95, 40),
	('The Lord of the Rings', 'Books', 25.95, 30),
	('Sleeping Bag', 'Outdoors', 99.95, 15),
    ('Camping Stove', 'Outdoors', 29.95, 20),
    ('Sunscreen', 'Outdoors', 7.95, 40),
    ('iPad', 'Electronics', 899.95, 20),
    ('Portable Solar Charger', 'Electronics', 499.99, 12),
    ('iPhone', 'Electronics', 799.99, 50),
    ('Gauze', 'First Aid', 8.99, 30),
    ('Medical Tape', 'First Aid', 4.95, 35),
    ('Antiseptic Swabs', 'First Aid', 12.95, 50),
    ('The Avengers', 'Movies', 19.95, 14),
    ('Star Wars', 'Movies', 12.50, 10);

SELECT * FROM products;