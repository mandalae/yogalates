const page = require('./page');
const authenticate = require('./authenticate');
const updateDb = require("../db/updateDB");

module.exports = {

    page: page,
    authenticate: authenticate,
    updateDb: updateDb

}
