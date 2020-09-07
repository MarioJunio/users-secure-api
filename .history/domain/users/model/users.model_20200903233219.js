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
        delete result._id;
        delete result.__v;

        return result;
    });
}

