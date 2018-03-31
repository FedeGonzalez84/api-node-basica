'use strict'
//Requires de la base de datos y app
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

//----------------------------------------------------------------------------------------------------
//Una vez que se establece la conexion a la base de datos, se pregunta
//se deja escuchando el puerto del servidor
mongoose.connect(config.db, (err, res) =>{
  if(err) {
    return console.log(`Error al conectarse a la base datos: ${err}`);
  }
  console.log("Conexion a la base de datos establecida");

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost: ${config.port}`); 
  });
})
//----------------------------------------------------------------------------------------------------
