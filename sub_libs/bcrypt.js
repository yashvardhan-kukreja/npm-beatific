const bcrypt = require('bcryptjs');
const Promise = require("bluebird");

module.exports.hashGen = (data, saltRounds=10) => {
    return new Promise((resolve, reject) => {
        if (!data)
            reject(new Error("Please enter some data to hash"));
        else {
            let salt = bcrypt.genSaltSync(saltRounds);
            let hash = bcrypt.hashSync(data, salt);
            resolve(hash);
        }
    });
}

module.exports.hashCheck = (hashedData, inputData) => {
    return new Promise((resolve, reject) => {
        if (!hashedData || !inputData)
            reject(new Error("Please enter some hashed data / normal data to validate"));
        else 
            bcrypt.compare(inputData, hashedData, (err, valid) => (err) ? reject(err) : resolve(valid));
    });
}