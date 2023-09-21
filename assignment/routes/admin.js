const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('adminLogin');
});

// (Optional) Post request for admin
router.post('/', (req, res) => {
    // Logic for verifying admin credentials
    // For simplicity, just redirect to the home page
    res.redirect('/');
});

module.exports = router;
