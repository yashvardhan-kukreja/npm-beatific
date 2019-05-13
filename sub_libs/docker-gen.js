const fs = require("fs");
const Promise = require("bluebird");

module.exports.dockerGen = (dockerfileName="dockerfile", portNumber, startCommand="npm start") => {
    return new Promise((resolve, reject) => {

        let start = startCommand.split(" ");

        let lastLine = "["

        for (let i=0; i<start.length-1; i++)
            lastLine += `"${start[i]}", `;
            
        lastLine += `"${start[start.length-1]}"]`
        
        let dockerContent = `FROM node:latest \n`
                            + `RUN mkdir -p "/app" \n`
                            + `WORKDIR "/app" \n`
                            + `COPY ./package.json ./ \n`
                            + `RUN npm install \n`
                            + `COPY ./ ./ \n`
                            + `EXPOSE ${portNumber} \n`
                            + `CMD ${lastLine}`;
                    
        fs.writeFile(dockerfileName, dockerContent, (err) => (err) ? reject(err) : resolve("Created the dockerfile"));
    });
}