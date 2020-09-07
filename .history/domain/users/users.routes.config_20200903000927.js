const UsersController = require('./controllers/users.controller');

module.exports.routesConfig = (app) => {

    app.get('/users', [
        UsersController.getById
    ]);

}