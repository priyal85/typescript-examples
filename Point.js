define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Point.prototype, "X", {
            get: function () {
                return this.x;
            },
            set: function (x) {
                this.x = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "Y", {
            get: function () {
                return this.y;
            },
            set: function (v) {
                if (v < 0) {
                    throw "Value cannot be less than 0.";
                }
                this.y = v;
            },
            enumerable: true,
            configurable: true
        });
        Point.prototype.draw = function () {
            console.log("X :" + this.x + " Y:" + this.y);
        };
        return Point;
    }());
    exports.Point = Point;
});
//# sourceMappingURL=Point.js.map