const express = require('express');
const data = require('./data.json');

const app = express();
//view engine setup
app.set('view engine', 'pug');

//static middleware setup
app.use('/static', express.static('public'));



//routes setup
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about');
    
})

app.get('/project/:id', (req, res) => {
    res.render('project', { data });

})

//404 error handler

app.use((req, res, next) => {
    const err = new Error('hey girl, this route does not exist')
    err.status = 404;
    next(err);
})


app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
})

app.listen(3000, () => {
    console.log('This application is running on localhost:3000! fr this time')
})