const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const { jwt_secret } = require('../../commons/config/env.config');

module.exports.auth = (req, res) => {
    console.log(`JWT Secret ${jwt_secret}`);
    
    const refreshId = req.body.userId + jwtSecret;

    //TODO: gerar access_token e refresh_token

    res.status(200).send({});
}