const express = require('express');
const json = require('./data.json');

const app = express();
//view engine setup
app.set('view engine', 'pug');

//static middleware setup
app.use('/static', express.static('public'));

//routes setup
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');

})

app.get('/project/:id', (req, res) => {
    res.render('project', {});

})

app.listen(3000, () => {
    console.log('This application is running on localhost:3000!')
})