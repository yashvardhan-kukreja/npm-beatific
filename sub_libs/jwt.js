const jwt = require("jsonwebtoken");
const Promise = require("bluebird");

module.exports.generateJWT = (data, secret, expiresIn) => {
    let data_obj = {
        data: data
    };
    return new Promise((resolve, reject) => {
        if (expiresIn)
            jwt.sign(JSON.parse(JSON.stringify(data_obj)), secret, { expiresIn: expiresIn }, (err, token) => (err) ? reject(err) : resolve(token));
        else
            jwt.sign(JSON.parse(JSON.stringify(data_obj)), secret, (err, token) => (err) ? reject(err) : resolve(token));
    });
}

module.exports.decodeJWT = (token, secret) => {
    return new Promise((resolve, reject) => {
        return jwt.verify(token, secret, (err, decoded) => (err) ? reject(err) : resolve(decoded.data));
    });
}