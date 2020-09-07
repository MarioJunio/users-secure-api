const UserModel = require('../model/users.model');
const crypto = require('crypto');

module.exports.getById = (req, res) => {
    res.status(200).send("Deu certo");
};

module.exports.novo = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.senha).digest("base64");

    req.body.senha = salt + "$" + hash;
    req.body.nivelPermissao = 1;

    UserModel.create(req.body).then(doc => {
        req.body.id = doc._id;

        res.status(201).send(req);
    });

}