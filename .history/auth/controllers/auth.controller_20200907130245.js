const jwt = require('jsonwebtoken');

const { jwt_secret } = require('../../commons/config/env.config');
const { getSalt, cryptPasswdWithSalt } = require('../../commons/utils/password_utils');

module.exports.auth = (req, res) => {
    console.log(`JWT Secret ${jwt_secret}`);

    try {
        const refreshId = req.body.userId + jwtSecret;

        const refreshToken = createRefreshToken(refreshToken, req);

        const accessToken = jwt.sign(req.body, jwt_secret);

        res.status(201).send({
            "access_token": accessToken,
            "refresh_token": refreshToken
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: error });
    }

}

function createRefreshToken(refreshId, req) {
    req.body.refreshKey = getSalt();

    return new Buffer(cryptPasswdWithSalt(refreshId, req.body.refreshKey)).toString('base64');
}