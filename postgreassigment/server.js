const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const pool = new Pool({
    user: 'test',
    host: 'localhost',
    database: 'tododb',
    password: 'test',
    port: 5432
});

// Routes
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos');
        res.render('todos', { todos: result.rows });
    } catch (err) {
        console.error(err);
        res.send('Error fetching todos.');
    }
});

app.post('/add-todo', async (req, res) => {
    const { title } = req.body;
    const date = new Date();

    try {
        await pool.query('INSERT INTO todos (title, date) VALUES ($1, $2)', [title, date]);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.send('Error adding todo.');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
