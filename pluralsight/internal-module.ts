interface IRectangle {
    hight: number;
    width: number;
    getArea(): number;
}
namespace Shapes {


    export class Rectangle implements IRectangle {
        constructor(public hight: number, public width: number) {

        }
        getArea(): number {
            return this.hight * this.width;
        }

    }

}

/// <reference path="./extended-internal-module.ts" />
import { App } from "./extended-internal-module";
import Util = App.Tools.Utils;
var logger = new Util.Logger(LoggerMode.Console);
namespace myprogram {
    function run() {
        var rect: IRectangle = new Shapes.Rectangle(5, 8);
        //toastr.info("Area :" + rect.getArea());
        logger.log("Area :" + rect.getArea());
    }
    run();
}