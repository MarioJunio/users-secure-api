const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://marioj:teste90@cluster0.9nlxr.mongodb.net/agenda?retryWrites=true&w=majority', options)
    .then(() => console.log('Conectou no MongoDB!'));

module.exports = mongoose;