const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'test',
  host: 'localhost',
  database: 'test_db',
password: 'test',
  port: 5432,
})

app.get('/data', (req,res) => {
    pool.query('select * from testdata',(err,result)=>{
        if(err)
        throw err;
    res.json(result.rows)
    })
})
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
pool.query('select * from testdata where id=$1', [id], (err,result) => {
    if (err)
        throw err;
        res.json(result.rows)})
})
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/add-data', (req, res) => {
    const { id, name, age } = req.body;

    pool.query('INSERT INTO testdata (id, name, age) VALUES ($1, $2, $3)', [id, name, age], (err, result) => {
        if (err) {
            throw err;
        }
        res.redirect('/'); 
});


app.listen(3000,()=>console.log("server running"))