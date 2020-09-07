const crypto = require('crypto');

module.exports.getSalt = () => crypto.randomBytes(16).toString('base64');

module.exports.cryptPasswd = (text) => {
    const salt = this.getSalt();
    const hash = this.cryptPasswdWithSalt(salt, text);

    return salt + "$" + hash;
}

module.exports.cryptPasswdWithSalt = (text, salt) => crypto.createHmac('sha512', salt).update(text).digest("base64");