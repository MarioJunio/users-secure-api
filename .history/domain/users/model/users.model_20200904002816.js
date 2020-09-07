const PasswdUtils = require('../../../commons/utils/password_utils');

const mongoose = require('../../../commons/service/mongoose.service');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
    nivelPermissao: Number
});

const User = mongoose.model('Users', userSchema);

module.exports.list = (page, size) => {

    return User
        .find()
        .limit(size)
        .skip(page * size)
        .exec((error, users) => {
            if (error) {
                reject(error);
            }

            resolve(users);
        });
}

module.exports.create = (userModel) => {
    userModel.senha = PasswdUtils.cryptPasswd(req.body.senha);
    userModel.nivelPermissao = 1;

    return new User(userModel).save();
}

module.exports.getById = (userId) => {
    return User.findById(userId).then((result) => {
        let user = result.toJSON();

        delete user._id;
        delete user.__v;

        return user;
    });
}

module.exports.update = (userId, userUpdated) => new Promise((resolve, reject) => {

    userUpdated.senha = PasswdUtils.cryptPasswd(userUpdated.senha);

    User.findById(userId, (error, user) => {

        if (error) {
            reject(error);
        }

        for (let field in userUpdated) {
            user[field] = userUpdated[field];
        }

        user.save((error, userSaved) => {
            if (error) reject(error);

            resolve(userSaved);
        });

    });

});

