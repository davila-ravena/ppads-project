CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  phone TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE menu_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER,
  name TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  available INTEGER DEFAULT 1,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES ('Bebidas'), ('Pratos Principais'), ('Sobremesas');
INSERT INTO menu_items (category_id, name, description, price)
VALUES 
(1, 'Suco Natural', 'Suco de frutas da estação', 8.50),
(2, 'Strogonoff de Frango', 'Acompanha arroz e batata palha', 24.90),
(3, 'Petit Gateau', 'Com sorvete de creme', 12.00);
