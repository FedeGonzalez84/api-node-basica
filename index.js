'use strict'
//Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/product');


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
  console.log('POST api/product');
  console.log(req.body);  

  //Instancio el modelo y cargo el modelo con datos traidos del request
  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;
  //Se almacena en la base de datos y se le pasa un callback para hacer algo
  product.save( (err, productStored) => {
    if(err){
      res.status(500).send({message: `Error al almacenar datos: ${err}`});
    }
    res.status(200).send({messsage: productStored});
  });

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

