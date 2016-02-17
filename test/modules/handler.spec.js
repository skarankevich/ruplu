var assert = require('chai').assert;
var handler = require('../../src/modules/handler.js');

describe('Handler', function () {
  var cats;

  describe('type', function () {
    it('should be a function', function () {
      assert.isDefined(handler);
      assert.isFunction(handler);
    });

    it('should return a function', function () {
      cats = handler(['кошка', 'кошки', 'кошек']);

      assert.isFunction(cats);
    });
  });

  describe('output form check', function () {
    ([1, 21, 101]).forEach(function (number) {
      it('кошка (' + number + ')', function () {
        assert.strictEqual(cats(number), 'кошка');
      });
    });

    ([2, 3, 4, 22, 23, 24, 122]).forEach(function (number) {
      it('кошки (' + number + ')', function () {
        assert.strictEqual(cats(number), 'кошки');
      });
    });

    ([5, 10, 11, 15, 25, 125]).forEach(function (number) {
      it('кошек (' + number + ')', function () {
        assert.strictEqual(cats(number), 'кошек');
      });
    });
  });

  describe('additional functionality', function () {
    var number = 1;

    it('output with count', function () {
      assert.strictEqual(cats(number, true), [number, ' ', cats(number)].join(''));
    });

    it('output with count and custom delimiter', function () {
      var delimiter = '&nbsp;';

      assert.strictEqual(cats(number, true, delimiter), [number, delimiter, cats(number)].join(''));
    });
  });
});
