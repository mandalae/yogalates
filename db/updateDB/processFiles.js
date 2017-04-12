const basePath = 'db/updates/';

module.exports = (db, fileNames) => {
    fileNames.forEach(file => {
        const script = require(process.cwd() + '/' + basePath + file);
        return script(db);
    })
}
