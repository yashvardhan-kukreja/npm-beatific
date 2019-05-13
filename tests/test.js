const chai = require("chai");
const app = require("../app");
const should = chai.should();

describe("----------- Enter the tests ----------", () => {

    let current_token;
    let current_hash;

    it("should generate JWT", (done) => {
        let data = "Hello, World!";
        let secret = "14321sdldsd1234321";
        let expiresIn = '5d';

        app.generateJWT(data, secret, expiresIn)
            .then(token => {
                current_token = token;
                token.should.be.a("string");
                done();
            })
            .catch(err => {
                console.error(err);
                done(err);
                process.exit(1);
            });
    });

    it("should decode/verify JWT", (done) => {
        let secret = "14321sdldsd1234321";

        app.decodeJWT(current_token, secret)
            .then(decoded => {
                decoded.should.be.a("string");
                done();
            })
            .catch(err => {
                done(err);
                process.exit(1);
            });
    });

    it("should generate bcrypt hash", (done) => {
        let data = "heythere";

        app.hashGen(data)
            .then(hash => {
                current_hash = hash;
                hash.should.be.a("string");
                done();
            })
            .catch(err => {
                done(err);
                process.exit(1);
            });
    });

    it("should compare/validate the bcrypt hash", (done) => {
        app.hashCheck(current_hash, "heythere")
            .then(valid => {
                valid.should.be.a("boolean");
                done();
                process.exit(0);
            })
            .catch(err => {
                done(err);
                process.exit(1);
            });
    });
});