const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/submitted', (req, res) => {
    res.render('submitted', { formData: req.body });
});

module.exports = router;
