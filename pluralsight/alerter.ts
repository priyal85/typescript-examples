import util= require("app-tools-utils");
import dataService= require("data-service");
var logger = new util.App.Utils.Logger(util.LoggerMode.Toastr);
export function showMessage() {
    var messageProvider  = new dataService.DataService();
    logger.log(messageProvider.getMessage());
}