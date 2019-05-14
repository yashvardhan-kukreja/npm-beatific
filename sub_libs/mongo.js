const mongoose = require("mongoose");
const Promise = require('bluebird');

module.exports.mongoConnect = (dbUri) => {
    return new Promise((resolve, reject) => {
        if (!dbUri)
            reject(new Error("Please enter a DB URI to connect to"));
        else
            mongoose.connect(dbUri, (err, output) => (err) ? reject(err) : resolve(output));
    });
}

module.exports.mongoModelGen = (schema, schemaName, collectionName) => {
    return new Promise((resolve, reject) => {
        if (schema == null || schemaName == null || schemaName == "") {
            reject(new Error("null value found for schema or schema name"));
        } else {
            let sch = new mongoose.Schema(schema);
            (collectionName) ? resolve(mongoose.model(schemaName, sch, collectionName)) : resolve(mongoose.model(schemaName, sch));
        }
    });
}