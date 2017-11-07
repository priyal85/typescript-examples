define(["require", "exports", "./extended-internal-module"], function (require, exports, extended_internal_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    })(Shapes || (Shapes = {}));
    var Util = extended_internal_module_1.App.Tools.Utils;
    var logger = new Util.Logger(LoggerMode.Console);
    var myprogram;
    (function (myprogram) {
        function run() {
            var rect = new Shapes.Rectangle(5, 8);
            //toastr.info("Area :" + rect.getArea());
            logger.log("Area :" + rect.getArea());
        }
        run();
    })(myprogram || (myprogram = {}));
});
//# sourceMappingURL=internal-module.js.map