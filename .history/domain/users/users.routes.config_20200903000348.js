const UsersController = require('./controllers/users.controller');

exports.routeConfig = function(app) {

    app.get('/users', [
        UsersController.getById
    ]);

}