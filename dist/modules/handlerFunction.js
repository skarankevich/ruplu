(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var handlerFunction = function (wordForms) {
        return function (count, withCount, delimiter) {
            if (withCount === void 0) { withCount = false; }
            if (delimiter === void 0) { delimiter = ' '; }
            var div = parseInt(String(count / 10));
            var mod = count % 10;
            var formIndex = 2;
            if (mod === 1 && count !== 11) {
                formIndex = 0;
            }
            else if (mod >= 2 && mod <= 4 && div !== 1) {
                formIndex = 1;
            }
            var word = wordForms[formIndex];
            return withCount ? [count, word].join(delimiter) : word;
        };
    };
    exports.default = handlerFunction;
});
//# sourceMappingURL=handlerFunction.js.map