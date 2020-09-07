const UserModel = require('../model/users.model');
const PasswdUtils = require('../../../commons/utils/password_utils');

module.exports.buscar = (req, res) => {
    UserModel.getById(req.params.userId).then(result => {
        res.status(200).send(result);
    });
}

module.exports.novo = (req, res) => {

    req.body.senha = PasswdUtils.cryptPasswd(req.body.senha);
    req.body.nivelPermissao = 1;

    UserModel.create(req.body).then(doc => {
        req.body.id = doc._id;

        res.status(201).send(req.body);
    });
}

module.exports.alterar = (req, res) => {

    UserModel.update(req.params.userId, req.body).then(_ => res.status(204).send({}));
};
