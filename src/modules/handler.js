var handler = function (wordForms) {
  return function (count, withCount, delimiter) {
    var div = parseInt(count / 10),
      mod = count % 10,
      formIndex = 2,
      word;

    withCount = !!withCount;
    delimiter = delimiter || ' ';

    if (mod === 1 && count !== 11) {
      formIndex = 0;
    } else if (mod >= 2 && mod <= 4 && div !== 1) {
      formIndex = 1;
    }

    word = wordForms[formIndex];

    return withCount ? [count, word].join(delimiter) : word;
  };
};

module.exports = handler;
