const UserModel = require('../../domain/users/model/users.model');

module.exports.isEmailAndPasswordMatch = (req, res, next) => {
    let email = req.body.email;
    let senha = req.body.senha;

    UserModel.findByEmail(email).then(user => {
        console.log(user);
    });
}