const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const SECRET = 'uma_chave_secreta_dev'; // em produção use env var
const db = new sqlite3.Database('./db.sqlite');

const app = express();
app.use(bodyParser.json());

// Registrar (simplificado)
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, phone } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  db.run('INSERT INTO users (name,email,password_hash,phone) VALUES (?,?,?,?)',
    [name, email, hash, phone],
    function(err){
      if(err){
        return res.status(400).json({ error: 'E-mail já cadastrado ou dados inválidos' });
      }
      res.json({ id: this.lastID, message: 'Cadastro realizado com sucesso' });
    });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if(!user) return res.status(401).json({ error: 'Credenciais inválidas' });
    const ok = bcrypt.compareSync(password, user.password_hash);
    if(!ok) return res.status(401).json({ error: 'Credenciais inválidas' });
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '8h' });
    res.json({ token });
  });
});

// Middleware auth
function authMiddleware(req,res,next){
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({ error: 'Token não informado' });
  const token = auth.split(' ')[1];
  try {
    const data = jwt.verify(token, SECRET);
    req.user = data;
    next();
  } catch(e) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

// Menu (público)
app.get('/api/menu', (req,res) => {
  const sql = `SELECT m.id, m.name, m.description, m.price, c.name as category
              FROM menu_items m LEFT JOIN categories c ON m.category_id = c.id
              WHERE m.available = 1`;
  db.all(sql, [], (err, rows) => {
    if(err) return res.status(500).json({ error: 'Erro no DB' });
    res.json(rows);
  });
});

app.listen(3000, () => console.log('Backend rodando em http://localhost:3000'));
