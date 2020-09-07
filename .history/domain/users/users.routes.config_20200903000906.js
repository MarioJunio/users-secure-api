const UsersController = require('./controllers/users.controller');

module.exports.routeConfig = (app) => {

    app.get('/users', [
        UsersController.getById
    ]);

}