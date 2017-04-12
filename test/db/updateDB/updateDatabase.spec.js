const expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');
const things = require('chai-things');
const chaiAsPromised = require("chai-as-promised");
const proxyquire = require('proxyquire');

chai.use(chaiAsPromised);
chai.use(things);
chai.use(spies);

let updateDatabase;

describe('Update Database', function() {

    let testScriptSpy;
    let loadChangeSpy;

    beforeEach(() => {
        const loadChangeDocuments = (db, version) => {
            const promise = new Promise((resolve, reject) => {
                resolve(['test-script']);
            });
            return promise;
        }
        const processFiles = (db) => {
            return 'testScript run';
        }

        processFilesSpy = chai.spy(processFiles);
        loadChangeSpy = chai.spy(loadChangeDocuments);

        updateDatabase = proxyquire('../../../db/updateDB/updateDatabase', {'./loadChangeDocuments': loadChangeSpy, './processFiles': processFilesSpy});
    });

    it('should be defined',() => {
        expect(updateDatabase).to.be.defined;
    });

    it('should load in documents based on version', (done) => {
        expect(updateDatabase('test-db', 2)).to.be.fulfilled.then(() => {
            expect(loadChangeSpy).to.have.been.called;
            done();
        });
    });

    it('should process the file based on input', (done) => {
        expect(updateDatabase('test-db', 2)).to.be.fulfilled.then(() => {
            expect(processFilesSpy).to.have.been.called.with(['test-script']);
            done();
        });
    });

});
