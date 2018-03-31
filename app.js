'use strict'
//Requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes');
//----------------------------------------------------------------------------------------------------
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);
//----------------------------------------------------------------------------------------------------
//Exports
module.exports = app;
