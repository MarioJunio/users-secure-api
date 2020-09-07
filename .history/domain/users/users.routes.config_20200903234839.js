const UsersController = require('./controllers/users.controller');

module.exports.routesConfig = (app) => {

    app.get('/users/:userId', [
        UsersController.buscar
    ]);

    app.post('/users', [
        UsersController.novo
    ]);

    app.patch("/users/:userId", [
        UsersController.alterar
    ]);
}