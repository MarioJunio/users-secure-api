const UserModel = require('../model/users.model');

module.exports.getById = (req, res) => {
    res.status(200).send("Deu certo");
};

module.exports.novo = (req, res) => {
    console.log(req.body);

    res.status(201).send(req.body);
}