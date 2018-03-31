'use strict'
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  picture: String,
  price: {type: Number, default:0},
  category: {type: String, enum: ['computers','phones','accesories'] },
  description: String
});

//Exporto el modelo generado
module.exports = mongoose.model('Product', ProductSchema);

