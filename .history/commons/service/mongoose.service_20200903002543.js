const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://marioj:teste90@cluster0.9nlxr.mongodb.net/agenda?retryWrites=true&w=majority')
    .then(() => console.log('Conectou no MongoDB!'));

module.exports = mongoose;