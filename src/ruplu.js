var handler = require('./modules/handler');
var ruplu = {};

ruplu.init = function (wordForms) {
  if (typeof wordForms === 'undefined') {
    throw new Error('Word forms array should be specified.');
  }

  if (typeof wordForms.push !== 'function' || wordForms.length !== 3) {
    throw new Error('Word forms should be an array with 3 items.');
  }

  return handler(wordForms);
};

module.exports = ruplu;
