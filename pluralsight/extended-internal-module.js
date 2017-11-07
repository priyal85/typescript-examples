define(["require", "exports", "./app-tools-utils"], function (require, exports, app_tools_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App;
    (function (App) {
        var Tools;
        (function (Tools) {
            var Shapes;
            (function (Shapes) {
                var Rectangle = /** @class */ (function () {
                    function Rectangle(hight, width) {
                        this.hight = hight;
                        this.width = width;
                    }
                    Rectangle.prototype.getArea = function () {
                        return this.hight * this.width;
                    };
                    return Rectangle;
                }());
                Shapes.Rectangle = Rectangle;
            })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
        })(Tools = App.Tools || (App.Tools = {}));
    })(App || (App = {}));
    (function (App) {
        var Tools;
        (function (Tools) {
            var Shapes;
            (function (Shapes) {
                var Point = /** @class */ (function () {
                    function Point(x, y) {
                        this.x = x;
                        this.y = y;
                    }
                    Point.prototype.getDist = function () {
                        return Math.sqrt(this.x * this.x + this.y * this.y);
                    };
                    return Point;
                }());
                Shapes.Point = Point;
            })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
        })(Tools = App.Tools || (App.Tools = {}));
    })(App || (App = {}));
    var Utils = app_tools_utils_1.App.Utils;
    var shps = App.Tools.Shapes;
    var logger = new Utils.Logger(app_tools_utils_1.LoggerMode.Console);
    var p = new shps.Point(4, 6);
    logger.log("Distance :" + p.getDist());
});
//# sourceMappingURL=extended-internal-module.js.map