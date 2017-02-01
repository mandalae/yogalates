var expect = require('chai').expect;
var chai = require('chai');
var things = require('chai-things');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.use(things);

var HomepageController = require('../../src/controllers/HomepageController.js');

describe('HomepageController', function() {

    var scope;
    var scopePromise;
    beforeEach(function(){
        scope = {};
        var httpMock = function(){
            var promise = new Promise(function(resolve, reject){
                resolve({"data": {
                    "document": "Test document",
                    "headline": "Test headline"
                }})
            });
            return promise;
        }

        scopePromise = HomepageController(scope, httpMock);
    });

    it('should contain a test description and year', function(done){
        expect(scopePromise).to.be.fulfilled.then(function(data){
            expect(data.data).to.equal('Test document');
            expect(data.headline).to.equal('Test headline');
            done();
        }).catch(function(err){
            done(new Error(err));
        });
    });
});
