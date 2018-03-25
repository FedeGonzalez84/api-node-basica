'use strict'
//Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes
app.get('/api/product', (req, res) => {
  res.status(200).send({ products: []});
});

app.get('/api/product/:productID', (req, res) => {
 
});

app.post('/api/product', (req, res) => {
  console.log(req.body);
  res.status(200).send({message: 'El producto se ha recibido'});
});

app.put('/api/product/:productId', (req, res) => {

});

app.delete('/api/product/:productId',(req, res) =>{

});

//Una vez que se establece la conexion a la base de datos, se pregunta
//se deja escuchando el puerto del servidor

mongoose.connect('mongodb://localhost:27017/shop', (err, res) =>{
  if(err) {
    return console.log(`Error al conectarse a la base datos: ${err}`);
  }
  console.log("Conexion a la base de datos establecida");

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost: ${port}`); 
  });

})

