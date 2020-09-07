const crypto = require('crypto');

module.exports.cryptPasswd = (text) => {
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = this.cryptPasswdWithSalt(salt, text);

    return salt + "$" + hash;
}

module.exports.cryptPasswdWithSalt = (text, salt) => crypto.createHmac('sha512', salt).update(text).digest("base64");