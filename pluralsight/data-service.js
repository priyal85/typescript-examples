define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService() {
            this.msg = "Hello, from other side";
        }
        DataService.prototype.getMessage = function () {
            return this.msg;
        };
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=data-service.js.map