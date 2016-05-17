var assert = require('chai').assert;
var ruplu = require('../index.js');

describe('RuPlu', function () {
  describe('should check own init with wrong values:', function () {
    var values = [undefined, true, false, 0, 1, '', 'abc', [], ['a'], ['a', 'b']];

    values.forEach(function (value) {
      it(JSON.stringify(value), function () {
        assert.throw(function () {
          ruplu(value);
        }, Error);
      });
    });
  });

  describe('should init with right array', function () {
    var arr = ['кошка', 'кошки', 'кошек'];

    it(JSON.stringify(arr), function () {
      assert.doesNotThrow(function () {
        ruplu(arr);
      });

      assert.isFunction(ruplu(arr));
    });
  });
});
