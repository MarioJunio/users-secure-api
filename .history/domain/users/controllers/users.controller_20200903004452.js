const UserModel = require('../model/users.model');
const crypto = require(crypto);

module.exports.getById = (req, res) => {
    res.status(200).send("Deu certo");
};

module.exports.novo = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");

    req.body.senha = salt + "$" + hash;
    req.body.nivelPermissao = 1;

    UserModel.create(req.body);

    res.status(201)
}