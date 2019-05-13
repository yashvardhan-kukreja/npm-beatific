const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const Promise = require("bluebird");


module.exports.mongoConnect = (dbUri) => {
    return new Promise((resolve, reject) => {
        if (!dbUri)
            reject(new Error("Please enter a DB URI to connect to"));
        else
            mongoose.connect(dbUri, (err, output) => (err) ? reject(err) : resolve(output));
    });
}

module.exports.helmetSecure = () => {
    return helmet();
}

module.exports.compressionSecure = () => {
    return compression();
}

module.exports.logger = (loggerType='dev') => {
    return morgan(loggerType);
}