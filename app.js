const express = require('express');
const data = require('./data.json');

const app = express();
//view engine setup
app.set('view engine', 'pug');

//static middleware setup
app.use('/static', express.static('public'));

// 500 error status test

// app.use((req, res, next) => {
//     const err = new Error('Oh naurrr!');
//     err.status = 500;
//     err.message = 'Oh naurrr!';
//     next(err);
// })

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

/* ERROR HANDLERS */
/* 404 handler to catch undefined or non-existent route requests */ 

app.use((req, res, next) => {
    const err = new Error('hey girl, this route does not exist')
    err.status = 404;
    err.message = 'hey girl, this route does not exist';
    next(err);
})

/* Global error handler */

app.use((err, req, res, next) => {
   if (err.status === 404) {
    res.locals.error = err;
    res.render('error');
   } else {
    err.message = err.message || ' Oopsie! Looks like the server got a poopsie!';
    res.status = err.status || 500;
    res.locals.error = err;
    res.render('error');
   }
})

app.listen(3000, () => {
    console.log('This application is running on localhost:3000! fr this time')
})