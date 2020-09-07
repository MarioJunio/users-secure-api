const UsersController = require('./controllers/users.controller');

const AuthValidation = require('../../auth/middlewares/auth.validation.middleware');

module.exports.routesConfig = (app) => {

    app.get("/users", [
        AuthValidation.validateJWT,
        UsersController.listar
    ]);

    app.get('/users/:userId', [
        UsersController.buscar
    ]);

    app.post('/users', [
        UsersController.novo
    ]);

    app.patch("/users/:userId", [
        UsersController.alterar
    ]);

    app.delete("/users/:userId", [
        UsersController.excluir
    ]);
}