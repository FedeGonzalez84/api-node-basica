'use strict'
//Requires
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();
const api = require('./routes');
//----------------------------------------------------------------------------------------------------
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/login', (req, res) => {
  res.render('login');
});
app.use('/', (req, res) => {
  res.render('products');
});

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
//----------------------------------------------------------------------------------------------------
//Exports
module.exports = app;
