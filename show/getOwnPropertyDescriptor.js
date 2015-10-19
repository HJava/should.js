/**
 * Created by hjava on 2015/10/19.
 */
var obj = require('./definePropertyTest.js');

var prop = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(prop);