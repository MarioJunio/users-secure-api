const UserModel = require('../../domain/users/model/users.model');
const { cryptPasswdWithSalt } = require('../../commons/utils/password_utils');

module.exports.isEmailAndPasswordMatch = (req, res, next) => {
    let email = req.body.email;
    let senha = req.body.senha;

    UserModel.findByEmail(email).then(user => {

        if (user) {
            const senhaToken = user.senha.split("$");

            const salt = senhaToken[0];
            const hash = senhaToken[1];

            if (hash == cryptPasswdWithSalt(senha, salt)) {

            }

            next();
        } else {

        }
    });
}