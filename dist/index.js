(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./modules/handlerFunction"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var handlerFunction_1 = require("./modules/handlerFunction");
    function setError(message) {
        throw new Error(message);
    }
    function default_1(wordForms) {
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
        return handlerFunction_1.default(wordForms);
    }
    exports.default = default_1;
});
//# sourceMappingURL=index.js.map