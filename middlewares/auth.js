'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

//Middleware para checkear si el usuario esta autorizado
function isAuth(req, res, next){
  //Sino tiene autorizacion
  if(!req.headers.authorization){
    return res.status(403).send({message: 'No tienes autorizacion'});
  }
  //Si tiene autorizacion, extraigo el token y el payload
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.decode(token, config.SECRET_TOKEN);
  
  //Compruebo que no expiro
  if(payload.exp < moment().unix()){
    return res.status(401).send({message: 'El token ha expirado'});
  }
  //Lo que esta en payload.sub es el id del usuario
  req.user = payload.sub;
  //Avanza al siguiente middleware
  next();
}

module.exports = isAuth;