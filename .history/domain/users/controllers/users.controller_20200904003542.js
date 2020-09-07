const UserModel = require('../model/users.model');

module.exports.listar = (req, res) => {
    let size = parseInt(req.query.size || 10);
    let page = parseInt(req.query.page || 0);

    UserModel.list(page, size).then((users) => res.status(200).send(users)).catch(e => console.log(e));
}

module.exports.buscar = (req, res) => {
    UserModel.getById(req.params.userId).then(result => {
        res.status(200).send(result);
    });
}

module.exports.novo = (req, res) => {

    UserModel.create(req.body).then(doc => {
        req.body.id = doc._id;

        res.status(201).send(req.body);
    });
}

module.exports.alterar = (req, res) => {

    UserModel.update(req.params.userId, req.body).then(_ => res.status(204).send({}));
};
