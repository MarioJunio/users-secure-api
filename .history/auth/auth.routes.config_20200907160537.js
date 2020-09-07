const AuthController = require("./controllers/auth.controller");
const VerifyUserMiddleware = require("./middlewares/verify.user.middleware");
const AuthValidationMiddleware = require('./middlewares/auth.validation.middleware');

module.exports.routesConfig = app => {

    app.post("/auth", [
        VerifyUserMiddleware.validateAuthFields,
        VerifyUserMiddleware.isEmailAndPasswordMatch,
        AuthController.auth
    ]);

    app.post("/auth/refresh", [
        AuthValidationMiddleware.validateJWT,
        AuthValidationMiddleware.checkRefreshKey,
        AuthValidationMiddleware.validateRefreshJWT,
        VerifyUserMiddleware.isEmailAndPasswordMatch,
        AuthController.auth
    ]);
}