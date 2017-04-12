const loadChangeDocuments = require('./loadChangeDocuments');
const processFiles = require('./processFiles');

const updateDatabase = (db, version) => {
    return loadChangeDocuments(version)
    .then(fileNames => {
        processFiles(db, fileNames);
        return version;
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = updateDatabase
