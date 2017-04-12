const fs = require("fs")
const basePath = './db/updates/';

const loadChangeDocuments = (version) => {
    let promise = new Promise((resolve, reject) => {
        let fileNames = [];
        fs.readdir(basePath, (err, files) => {
            if (err){
                reject(err);
            }

            files.forEach(file => {
                console.log('Found file: ', file);

                let fileNameArray = file.split("-");
                if (parseInt(fileNameArray[0]) > version){
                    console.log('Adding file: ', file);
                    fileNames.push(file);
                }
            });
            resolve(fileNames);
        });
    });
    return promise;
}

module.exports = loadChangeDocuments
