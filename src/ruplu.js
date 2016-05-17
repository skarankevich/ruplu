var handler = require('./modules/handler');

function setError(message) {
  throw new Error(message);
}

module.exports = function (wordForms) {
  if (typeof wordForms === 'undefined') {
    setError('Word forms array should be specified.');
  }

  if (!Array.isArray(wordForms)) {
    setError('Word forms should be an array.');
  }

  wordForms = wordForms.slice(0, 3);

  if (wordForms.length !== 3) {
    setError('Word forms should contain 3 items.');
  }

  return handler(wordForms);
};
