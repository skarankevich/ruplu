var assert = require('chai').assert;
var ruplu = require('../index.js');

describe('RuPlu', function () {
  describe('should check own init with wrong values:', function () {
    var values = [undefined, true, false, 0, 1, '', 'abc', [], ['a'], ['a', 'b'], ['a', 'b', 'c', 'd']];

    values.forEach(function (value) {
      it(JSON.stringify(value), function () {
        assert.throw(function () {
          ruplu.init(value);
        }, Error);
      });
    });
  });

  describe('should init with right array', function () {
    var arr = ['кошка', 'кошки', 'кошек'];

    it(JSON.stringify(arr), function () {
      assert.doesNotThrow(function () {
        ruplu.init(arr);
      });

      assert.isFunction(ruplu.init(arr));
    });
  });
});
