const AuthController = require("./controllers/auth.controller");
const VerifyUserMiddleware = require("./middlewares/verify.user.middleware");

module.exports.routesConfig = app => {

    app.post("/auth", [
        AuthController.auth
    ]);
}