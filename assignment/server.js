const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home
app.get('/', (req, res) => {
    res.render('home');
});

// About
app.get('/about', (req, res) => {
    res.render('about');
});

// Contact form and submission
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submitted', (req, res) => {
    res.render('submitted', { formData: req.body });
});

// Admin login
app.get('/admin', (req, res) => {
    res.render('adminLogin');
});

// (Optional) Post request for admin
app.post('/admin', (req, res) => {
    // Logic for verifying admin credentials
    // For simplicity, just redirect to the home page
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
