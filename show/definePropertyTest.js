/**
 * Created by hjava on 2015/10/19.
 */
var obj = {name: 'haha'};
Object.defineProperty(obj, 'age', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 2
});

console.log(obj.age);
module.exports = obj;