import handlerFunction from '../../src/modules/handlerFunction'

describe('Handler', function () {
  const cats = handlerFunction(['кошка', 'кошки', 'кошек'])

  describe('type', function () {
    test('should return a function', function () {
      expect(cats).toBeInstanceOf(Function)
    })
  })

  describe('output form check', () => {
    ([1, 21, 101]).forEach((number) => {
      test('кошка (' + number + ')', () => {
        expect(cats(number)).toEqual('кошка')
      })
    });

    ([2, 3, 4, 22, 23, 24, 122]).forEach((number) => {
      test('кошки (' + number + ')', () => {
        expect(cats(number)).toEqual('кошки')
      })
    });

    ([5, 10, 11, 15, 25, 125]).forEach((number) => {
      test('кошек (' + number + ')', () => {
        expect(cats(number)).toEqual('кошек')
      })
    })
  })

  describe('additional functionality', () => {
    test('output with count', () => {
      expect(cats(1, true)).toEqual('1 кошка')
    })

    test('output with count and custom delimiter', () => {
      expect(cats(1, true, '&nbsp;')).toEqual('1&nbsp;кошка')
    })
  })
})
