const UsersController = require('./controllers/users.controller');

const AuthValidation = require('../../auth/middlewares/auth.validation.middleware');

const { niveisPermissao } = require('../../commons/config/env.config');

module.exports.routesConfig = (app) => {

    app.post('/users', [
        UsersController.novo
    ]);

    app.get("/users", [
        AuthValidation.validateJWT,
        AuthValidation.hasPermission(niveisPermissao.NORMAL),
        UsersController.listar
    ]);

    app.get('/users/:userId', [
        AuthValidation.validateJWT,
        AuthValidation.hasPermission(niveisPermissao.NORMAL),
        UsersController.buscar
    ]);

    app.patch("/users/:userId", [
        AuthValidation.validateJWT,
        AuthValidation.hasPermission(niveisPermissao.USER),
        UsersController.alterar
    ]);

    app.delete("/users/:userId", [
        AuthValidation.hasPermission(niveisPermissao.ADMIN),
        UsersController.excluir
    ]);
}