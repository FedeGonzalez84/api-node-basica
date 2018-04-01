'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user){
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    eat: moment().add(365, 'days').unix()
  };

  return jwt.encode(payload, config.SECRET_TOKEN);
}

module.exports = createToken;