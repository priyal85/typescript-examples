import tstr = require('toastr');
export enum LoggerMode{Console=1,Alert=2,Toastr=3}

export module App {
    interface ILogger {
        log: (msg: string) => void;
    }
    export module Utils {
        export class Logger implements ILogger {
            log: any;
            constructor(public mode: LoggerMode) {
                switch (mode) {
                    case LoggerMode.Console:
                        this.log = (msg: string) => console.log(msg);
                        break;
                    case LoggerMode.Alert:
                        this.log = (msg: string) => alert(msg);
                        break;
                    case LoggerMode.Toastr:
                        this.log = (msg: string) => tstr.info(msg);
                        break;
                    default:
                        this.log = (msg: string) => console.log(msg);
                        break;
                }
            }

        }
    }
}