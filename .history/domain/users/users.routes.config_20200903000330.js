const UsersController = require('./users.controller');

exports.routeConfig = function(app) {

    app.get('/users', [
        UsersController.getById
    ]);

}