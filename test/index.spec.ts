import ruplu from '../src/index'

describe('RuPlu', function () {
  describe('should init with right array', () => {
    const arr = ['кошка', 'кошки', 'кошек']

    test(JSON.stringify(arr), () => {
      expect(ruplu(arr)).not.toThrowError()

      expect(ruplu(arr)).toBeInstanceOf(Function)
    })
  })
})
