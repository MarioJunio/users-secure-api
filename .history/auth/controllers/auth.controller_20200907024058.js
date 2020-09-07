const { jwt_secret } = require('../../commons/config/env.config');

module.exports.auth = (req, res) => {

    console.log("req.body():", req.body);

    res.status(200).send({});
}