const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

module.exports.helmetSecure = () => {
    return helmet();
}

module.exports.compressionSecure = () => {
    return compression();
}

module.exports.logger = (loggerType='dev') => {
    return morgan(loggerType);
}