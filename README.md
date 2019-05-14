# Beatific
[![npm version](https://badge.fury.io/js/beatific.svg)](https://badge.fury.io/js/beatific)
[![Build Status](https://travis-ci.com/yashvardhan-kukreja/npm-beatific.svg?token=xkGWiw62FsqB4JqveXu3&branch=master)](https://travis-ci.com/yashvardhan-kukreja/npm-beatific)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.github.com/yashvardhan-kukreja/npm-beatific//edit/master/LICENSE)

### A single npm package which satisfies the need for the following packages:

 - **mongoose** => For establishing connection to your MongoDB.
 - **bcryptjs** => For hashing and verifying hashes.
 - **helmet** => For securing Express apps by setting various http headers.
 - **compression** => For the compression of route propagation.
 - **jsonwebtoken** => For generating and verifying JWTs.
 - **morgan** => For logging every request made to your backend.

 **It also generates the dockerfile for your project :)**

 -------------

 ## Usage:

### Installation:

```js
npm install --save beatific
```
<br>


### API:

```js
var beatific = require("beatific");
```
<br>


### MongoDB/Mongoose Functionality:

 - Connect to a MongoDB 

 Parameters: MongoDB URI

```js
beatific.mongoConnect(dbURI)
.then(db => console.log("Connected to the DB..."))
    .catch(err => console.error("Error connecting to the DB!"));
```

 - Create a mongo schema and automatically generate a mongoose.model for it

 Parameters: Schema name, schema object, db collection name (optional)

 ```js

 let userSchema = {
    name: {
       type: String,
       required: true
    },
    email: {
       type: String,
       required: true,
       unique: true
    }
 };

 beatific.mongoModelGen('User', userSchema, "users")
 .then(model => console.log("mongoose.model generated for user schema"))
      .catch(err => console.error("Some problem occurred"));
 ```

 What this does behind the scenes

 ```js

const mongoose = require("mongoose");

let userSchema = {
    name: {
       type: String,
       required: true
    },
    email: {
       type: String,
       required: true,
       unique: true
    }
 };

 let schema = new mongoose.schema(userSchema);

 return mongoose.model('User', schema, "users");

 ```
 <br>


### JWT functionality:

 - Signing/Generating the token:

 Parameters: data, secret, expiresIn (optional)

 ```js
 beatific.generateJWT({message: "Hey there"}, 'something_secret', '4d')
 .then(token => console.log("Here's the token " + token))
    .catch(err => console.error("Some problem occurred"));
 ```
<br>

 - Verifying/Decoding the token:

 Parameters: token, secret

 ```js
  beatific.decodeJWT('my_token_1234321', 'something_secret')
 .then(decoded => console.log("Here's the decoded token " + decoded))
    .catch(err => console.error("Some problem occurred"));
 ```
 <br>

### Bcrypt Functionality:

 - Hashing some data:

Parameters: data, salt rounds (default=10)

```js
beatific.hashGen("hey there", 8)
.then(hash => console.log("Here's the hash " + hash))
    .catch(err => console.error("Some problem occurred"));
```
<br>

 - Verifying/Comparing some data and corresponding hash:

 Parameters: hashed data, inputData

 ```js
 beatific.hashCheck("$adfdsf23243546524", "my password may be")
 .then(valid => console.log("Status of check: " + valid))
    .catch(err => console.error("Some problem occurred"));
 ```
 <br>

### Use logger
Parameters: loggerType (default = "dev")

```js
//In your main .js file

var app = express();
loggerType = "short"; // For example

app.use(beatific.logger(loggerType));
```
<br>


### Use helmet:

```js
// In your main .js file
var app = express();

app.use(beatific.compression());
```
<br>


### Use compression:

```js
// In your main .js file
var app = express();

app.use(beatific.compression());
```
<br>

----------

### Generate Dockerfile for the project

Parameters: dockerfile_name (default="dockerfile"), portNumber, startCommand (default="npm start")

Just run this once in your main .js file:

```js
beatific.dockerGen("dockerfile.dev", 8000, "npm test");
```


------

## License
[MIT](./LICENSE)

