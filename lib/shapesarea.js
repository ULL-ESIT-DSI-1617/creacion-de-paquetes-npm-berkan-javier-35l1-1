'use strict';
let util = require('util');
/**
 * Class that defines a figure of type x.
 * @type {Class}
 */
class Shape {
    /**
     * Constructor of the class that receives two arguments.
     * @param  {Hash}  options Width and length of the shape.
     * @param  {String} shape   Name of the shape.
     */
    constructor(options, shape)  {
        Object.assign(this, options);
        this.shape = shape || this.constructor.name;
    }
    /**
     * Function that calculates the area of the shape that is specified in the constructor.
     * @return {Number} Returns the calculated value of the area.
     */
    getArea() {
        try {
            let shape = this;
            if (this.constructor.name === 'Shape')
                shape = new Shape.Shapes[this.shape](this);
            return shape.area();
        } catch (e) {
            console.error(`Can't compute area of '${this.shape}' shape.`);
            return null;
        }
    }
}

Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;