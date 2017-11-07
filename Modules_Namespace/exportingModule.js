define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LocalClass = /** @class */ (function () {
        function LocalClass() {
        }
        return LocalClass;
    }());
    var localVariable = 123;
    var ExportedClass = /** @class */ (function () {
        function ExportedClass() {
        }
        return ExportedClass;
    }());
    exports.ExportedClass = ExportedClass;
    exports.exportedVariable = 456;
    var exportedValiableWithHiddenName = "Hiden named varible";
    exports.hiddenVarible = exportedValiableWithHiddenName;
});
//# sourceMappingURL=exportingModule.js.map