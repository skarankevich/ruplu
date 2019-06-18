const handlerFunction = function (wordForms: string[]) {
  return function (count: number, withCount: boolean = false, delimiter: string = ' ') {
    const div = parseInt(String(count / 10))
    const mod = count % 10

    let formIndex = 2

    if (mod === 1 && count !== 11) {
      formIndex = 0
    } else if (mod >= 2 && mod <= 4 && div !== 1) {
      formIndex = 1
    }

    const word = wordForms[formIndex]

    return withCount ? [count, word].join(delimiter) : word
  }
}

export default handlerFunction
