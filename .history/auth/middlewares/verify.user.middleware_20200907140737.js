const UserModel = require('../../domain/users/model/users.model');
const { cryptPasswdWithSalt } = require('../../commons/utils/password_utils');

module.exports.validateAuthFields = (req, res, next) => {
    let errors = [];

    if (req.body) {

        if (!req.body.email) {
            errors.push('Email é obrigatório');
        }

        if (!req.body.senha) {
            errors.push('Senha é obrigatória');
        }
    }

    if (errors)
        return res.status(400).json({ errors: errors.join(',') });

    return next();
}

module.exports.isEmailAndPasswordMatch = (req, res, next) => {
    let email = req.body.email;
    let senha = req.body.senha;

    UserModel.findByEmail(email).then(user => {

        if (user) {
            const senhaToken = user.senha.split("$");

            const salt = senhaToken[0];
            const hash = senhaToken[1];

            if (hash === cryptPasswdWithSalt(senha, salt)) {
                req.body = {
                    userId: user._id,
                    nome: `${user.nome} ${user.sobrenome}`,
                    email: user.email,
                    nivelPermissao: user.nivelPermissao,
                    provider: "email"
                };

                return next();

            } else {
                return res.status(400).send({ errors: ["Email / senha inválido(s)"] });
            }

        } else {
            return res.status(404).send({});
        }
    });
}