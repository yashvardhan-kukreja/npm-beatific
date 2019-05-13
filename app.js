const {hashGen} = require("./sub_libs/bcrypt");
const {hashCheck} = require("./sub_libs/bcrypt");

const {dockerGen} = require("./sub_libs/docker-gen");

const {generateJWT} = require("./sub_libs/jwt");
const {decodeJWT} = require("./sub_libs/jwt");

const {mongoConnect} = require("./sub_libs/general");
const {helmetSecure} = require("./sub_libs/general");
const {compressionSecure} = require("./sub_libs/general");
const {logger} = require("./sub_libs/general");

module.exports = {
    hashGen,
    hashCheck,
    dockerGen,
    generateJWT,
    decodeJWT,
    mongoConnect,
    helmetSecure,
    compressionSecure,
    logger
}