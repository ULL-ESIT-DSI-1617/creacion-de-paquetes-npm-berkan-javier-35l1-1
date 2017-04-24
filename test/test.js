var Shape = require('../shapesarea.js');

describe("getArea", function() {
    it("must compute the triangle area correctly. Shape object", function() {
        let a = new Shape({
            width: 100,
            height: 50
        }, 'Triangle');
        let s = a.getArea();
        s.should.match(/^5000$/);
    })
});
