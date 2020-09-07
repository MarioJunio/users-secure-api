const jwt = require('jsonwebtoken');

const { jwt_secret } = require('../../commons/config/env.config');
const { getSalt, cryptPasswdWithSalt } = require('../../commons/utils/password_utils');

module.exports.auth = (req, res) => {
    console.log(`JWT Secret ${jwt_secret}`);

    const refreshId = req.body.userId + jwtSecret;

    const refreshToken = createRefreshToken(refreshToken, req);

    const accessToken = jwt.sign(req.body, jwt_secret);

    res.status(201).send({
        "access_token": accessToken,
        "refresh_token": refreshToken
    });

    //TODO: gerar access_token e refresh_token

    res.status(200).send({});
}

function createRefreshToken(refreshId, req) {
    req.body.refreshKey = getSalt();

    return new Buffer(cryptPasswdWithSalt(refreshId, req.body.refreshKey)).toString('base64');
}