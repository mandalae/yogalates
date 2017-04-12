const expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');
const things = require('chai-things');
const chaiAsPromised = require("chai-as-promised");
const proxyquire = require('proxyquire');

chai.use(chaiAsPromised);
chai.use(things);
chai.use(spies);

let loadChangeDocuments;

describe('Load Change Documents', function() {

    beforeEach(() => {
        loadChangeDocuments = require('../../../db/updateDB/loadChangeDocuments');
    });

    it('should be defined',() => {
        expect(loadChangeDocuments).to.be.defined;
    });

    it('should find the documents based on version',(done) => {
        const documents = loadChangeDocuments(1);
        expect(documents).to.be.fulfilled.then(documentList => {
            expect(documentList.length).to.equal(1);
            expect(documentList[0]).to.equal('2-add-classes.js');
            done();
        });
    });

    it('should find no documents if there are no newer versions',(done) => {
        const documents = loadChangeDocuments(99);
        expect(documents).to.be.fulfilled.then(documentList => {
            expect(documentList.length).to.equal(0);
            done();
        });
    });

});

describe('Load Change Documents - Failure', function() {

    beforeEach(() => {
        const fs = {
            readdir: (basePath, callback) => {
                callback('something happened', null);
            }
        }
        loadChangeDocuments = proxyquire('../../../db/updateDB/loadChangeDocuments', {'fs': fs});
    });

    it('should reject on error from fs',(done) => {
        expect(loadChangeDocuments(99)).to.be.rejectedWith('something happened').then(() => {
            done();
        });
    });

});
