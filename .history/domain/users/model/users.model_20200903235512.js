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

module.exports.create = (userModel) => {
    const user = new User(userModel);
    return user.save();
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

    User.findById(userId, (error, user) => {

        if (error) {
            reject(error);
        }

        console.log(user);

        for (let field in userUpdated) {
            user[field] = userUpdated[field];
        }

        console.log(user);

        resolve(user);

    });

});

