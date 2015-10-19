/**
 * Created by hjava on 2015/10/19.
 */
var obj = {name: 'haha'};
Object.defineProperty(obj, 'age', {
    enumerable: false,
    configurable: true,
    //writable: true,
    get: function () {
        return 1;
    }
});

console.warn(obj.age);