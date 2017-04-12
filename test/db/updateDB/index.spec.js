const expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');
const proxyquire = require('proxyquire');


chai.use(spies);

const dbObject = {
    collection : name => {
        return dbObject;
    },
    find: object => {
        return dbObject;
    },
    each: callback => {
        callback(null, {value: 1});
    }
}

const dbConnect = () => {
    const promise = new Promise((resolve, reject) => {
        resolve(dbObject)
    });
    return promise;
}

let updateDb;
let connectSpy;
let collectionSpy;
let findSpy;

describe('Database updater', function() {

    beforeEach(() => {
        connectSpy = chai.spy(dbConnect);
        collectionSpy = chai.spy.on(dbObject, "collection");
        findSpy = chai.spy.on(dbObject, "find");

        updateDb = proxyquire('../../../db/updateDB', {'dbConnect': dbConnect});
    });

    it('should be defined',() => {
        expect(updateDb).to.be.defined;
    });

    it('should connect to the database', () => {
        expect(connectSpy).to.have.been.called;
    });

    it('should get the version collection', () => {
        expect(collectionSpy).to.have.been.called;
        expect(findSpy).to.have.been.called;
    });

});
