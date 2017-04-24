var Shape = require('../lib/shapesarea.js');
var should = require('should');

let triangle = new Shape({
    width: 100,
    height: 50
}, 'Triangle');

describe("classShape", function() {
    it("triangle should exist", function() {
        triangle.should.exist;
    });
    it("triangle should be a shape", function() {
      triangle.should.be.an.instanceof(Shape);
    });
    it("width should be 100", function() {
        triangle.width.should.equal(100);
    });
    it("triangle should have height", function() {
        triangle.should.have.property('height');
    });
});
