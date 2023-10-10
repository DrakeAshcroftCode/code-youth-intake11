const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Brown', age: 35 }
];


app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/users', (req, res) => {
    res.render('users', { users: users });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

V9LE
VILKOMEN MEIN KOMERRADEN