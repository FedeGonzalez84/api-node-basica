'use strict'

const services = require('../services');

//Middleware para checkear si el usuario esta autorizado
function isAuth(req, res, next){
  //Sino tiene autorizacion
  if(!req.headers.authorization){
    return res.status(403).send({message: 'No tienes autorizacion'});
  }
  const token = req.headers.authorization.split(' ')[1];
  services.decodeToken(token)
    .then(response => {
      req.user = response;
      next();
    })
    .catch(response => {
      res.status(response.status);
    });
}

module.exports = isAuth;