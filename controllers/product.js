'use strict'

const Product = require('../models/product');
//-------------------------------------------------------------------------------------------
function getProduct(req, res){
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
      if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
      if(!product) return res.status(404).send({message: 'El producto no existe'});
  
      res.status(200).send({ product });
    });
}
//-------------------------------------------------------------------------------------------
function getProducts(req, res){
  Product.find({}, (err, products) => {
    if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
    if(!products) return res.status(404).send({message: 'No existen productos'});

    res.status(200).send({ products });
  });
}
//-------------------------------------------------------------------------------------------
function updateProduct(req, res){
  let productId = req.params.productId;
  Product.findByIdAndUpdate(productId, req.body, (err, productUpdated) => {
    if(err) return res.status(500).send({message: `Error al actualizar el producto: ${err}`});
    res.status(200).send({product: productUpdated});
  });
}
//-------------------------------------------------------------------------------------------
function deleteProduct(req, res){
  let productId = req.params.productId;
  Product.findById(productId, (err, product) => {
    if(err) return res.status(500).send({message: `Error al borrar el producto: ${err}`});
    if(!product) return res.status(404).send({message: 'El producto no existe'});

    product.remove((err, ) =>{
      if(err) return res.status(500).send({message: `Error al borrar el producto: ${err}`});
      res.status(200).send({message: 'El producto se ha eliminado corectamente'});
    });

  });
}
//-------------------------------------------------------------------------------------------
function saveProduct(req, res){
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
    if(err) res.status(500).send({message: `Error al almacenar datos: ${err}`});
    res.status(200).send({messsage: productStored});
  });
}
//-------------------------------------------------------------------------------------------
module.exports = {
  getProduct,
  getProducts,
  updateProduct,
  saveProduct,
  deleteProduct
}
