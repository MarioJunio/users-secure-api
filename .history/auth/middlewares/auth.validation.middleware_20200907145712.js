const jwt = require('jsonwebtoken');

const { jwt_secret } = require('../../commons/config/env.config');

module.exports.validateJWT = (req, res, next) => {

    if (req.headers.authorization) {
        const accessToken = req.headers.authorization.split(' ');

        if (accessToken[0] === 'Bearer') {
            req.jwt = jwt.verify(accessToken[1], jwt_secret);
            return next();
        } else {
            return res.status(403).json({
                errors: ['Token inválido']
            });
        }

    } else {
        return res.status(401).json({
            errors: ['Autenticação requerida']
        });
    }

}

module.exports.hasPermission = (nivelPermissaoDesejado) => {
    return (req, res, next) => {
        const nivelPermissao = parseInt(req.jwt.nivelPermissao);

        if (nivelPermissao === nivelPermissaoDesejado) {
            return next();
        } else {
            res.status(403).json({
                errors: ['Você não possui permissão para acessar esse recurso']
            })
        }

    }
}