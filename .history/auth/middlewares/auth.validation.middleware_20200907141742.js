module.exports.validateJWT = (req, res, next) => {

    if (req.headers.authorization) {

    } else {
        return res.status(401).json({
            errors: ['Autenticação requerida']
        });
    }

}