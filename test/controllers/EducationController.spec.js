var expect = require('chai').expect;
var chai = require('chai');
var things = require('chai-things');

chai.use(things);

var EducationController = require('../../src/controllers/EducationController.js');

describe('EducationController', function() {
   
    var scope;
    beforeEach(function(){
        scope = {};

        EducationController(scope);
    });

    it('should contain an array of courses', function(){
        expect(scope.courses).to.be.an('array');
    });

    it('should contain an array of objects with description and year', function(){
        expect(scope.courses).to.all.have.property('description');
        expect(scope.courses).to.all.have.property('year');
    });
});