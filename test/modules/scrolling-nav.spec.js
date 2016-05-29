var expect = require('chai').expect;
var chai = require('chai');
var things = require('chai-things');

chai.use(things);

var scrollNav = require('../../src/modules/scrolling-nav.js');

describe('Scrolling navigation', function() {
   
    var scope;
    beforeEach(function(){
        scope = {};

        scrollNav(scope);
    });

    it('should contain an array of courses', function(){
        expect(scope.courses).to.be.an('array');
    });

    it('should contain an array of objects with description and year', function(){
        expect(scope.courses).to.all.have.property('description');
        expect(scope.courses).to.all.have.property('year');
    });
});