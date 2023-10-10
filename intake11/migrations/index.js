const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit-data', (req, res) => {
    const userData = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }});

    res.json(userData); 

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
