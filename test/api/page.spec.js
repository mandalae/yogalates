var expect = require('chai').expect;
var chai = require('chai');
var things = require('chai-things');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.use(things);

var pageApi = require('../../api/page.js');

describe('Page API', function() {

    it('should be defined',() => {
        expect(pageApi).to.be.defined;
    });

});
