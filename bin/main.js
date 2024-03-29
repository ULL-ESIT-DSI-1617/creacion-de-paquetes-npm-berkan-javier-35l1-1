#!/usr/bin/env node

let util = require('util');
var readline = require('readline');
let Shape = require('../lib/shapesarea.js')

try {
  let type = process.argv[2];
  let Module = require('@ull-berkan-javier/ull-shape-' + type.toLowerCase());
  let arg = process.argv[3];
  let obj = JSON.parse(arg.toString());
  let t = new Shape(obj, type);
  let s = t.getArea();
  console.log(s);
}
catch (e) {
  console.log(e.message);
}