define(["require", "exports", "toastr"], function (require, exports, tstr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoggerMode;
    (function (LoggerMode) {
        LoggerMode[LoggerMode["Console"] = 1] = "Console";
        LoggerMode[LoggerMode["Alert"] = 2] = "Alert";
        LoggerMode[LoggerMode["Toastr"] = 3] = "Toastr";
    })(LoggerMode = exports.LoggerMode || (exports.LoggerMode = {}));
    var App;
    (function (App) {
        var Utils;
        (function (Utils) {
            var Logger = /** @class */ (function () {
                function Logger(mode) {
                    this.mode = mode;
                    switch (mode) {
                        case LoggerMode.Console:
                            this.log = function (msg) { return console.log(msg); };
                            break;
                        case LoggerMode.Alert:
                            this.log = function (msg) { return alert(msg); };
                            break;
                        case LoggerMode.Toastr:
                            this.log = function (msg) { return tstr.info(msg); };
                            break;
                        default:
                            this.log = function (msg) { return console.log(msg); };
                            break;
                    }
                }
                return Logger;
            }());
            Utils.Logger = Logger;
        })(Utils = App.Utils || (App.Utils = {}));
    })(App = exports.App || (exports.App = {}));
});
//# sourceMappingURL=app-tools-utils.js.map