const jwt = require('jsonwebtoken');

const { jwt_secret } = require('../../commons/config/env.config');
const { getSalt, cryptPasswdWithSalt } = require('../../commons/utils/password_utils');

module.exports.auth = (req, res) => {

    try {
        const refreshId = req.body.userId + jwt_secret;

        const refreshToken = createRefreshToken(refreshId, req);

        const accessToken = jwt.sign(req.body, jwt_secret);

        res.status(201).json({
            "access_token": accessToken,
            "refresh_token": refreshToken
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }

}

function createRefreshToken(refreshId, req) {
    req.body.refreshKey = getSalt();

    return new Buffer.from(cryptPasswdWithSalt(refreshId, req.body.refreshKey)).toString('base64');
}