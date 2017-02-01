var expect = require('chai').expect;
var chai = require('chai');
var things = require('chai-things');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.use(things);

var EducationController = require('../../src/controllers/EducationController.js');

describe('EducationController', function() {

    var scope;
    var scopePromise;
    beforeEach(function(){
        scope = {};
        var httpMock = function(){
            var promise = new Promise(function(resolve, reject){
                resolve({"data": {"document": [
                    {
                        "description": "Test description",
                        "year": 2017
                    }
                ]}})
            });
            return promise;
        }

        scopePromise = EducationController(scope, httpMock);
    });

    it('should contain an array of courses', function(done){
        expect(scopePromise).to.be.fulfilled.then(function(data){
            expect(data.courses).to.be.an('array');
            done();
        }).catch(function(err){
            done(new Error(err));
        });
    });

    it('should contain an array of objects with description and year', function(done){
        expect(scopePromise).to.be.fulfilled.then(function(data){
            expect(data.courses).to.all.have.property('description');
            expect(data.courses).to.all.have.property('year');
            done();
        }).catch(function(err){
            done(new Error(err));
        });
    });

    it('should contain a test description and year', function(done){
        expect(scopePromise).to.be.fulfilled.then(function(data){
            expect(data.courses[0].description).to.equal('Test description');
            expect(data.courses[0].year).to.equal(2017);
            done();
        }).catch(function(err){
            done(new Error(err));
        });
    });
});
