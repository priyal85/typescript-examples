interface IRectangle {
    hight: number;
    width: number;
    getArea(): number;
}

namespace App.Tools.Shapes {



    export class Rectangle implements IRectangle {
        constructor(public hight: number, public width: number) {

        }
        getArea(): number {
            return this.hight * this.width;
        }

    }

}


namespace App.Tools.Shapes {

    export interface IPoint {
        getDist(): number;
    }
    export class Point implements IPoint {
        constructor(private x: number, private y: number) {
        }
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}
/// <reference path="./app-tools-utils.ts" />
import { App as UtilApp, LoggerMode } from "./app-tools-utils";

import Tools = App.Tools;

import Utils = UtilApp.Utils;

import shps = App.Tools.Shapes;


var logger = new Utils.Logger(LoggerMode.Console);

var p: shps.IPoint = new shps.Point(4, 6);

logger.log("Distance :" + p.getDist());