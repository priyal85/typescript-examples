define(["require", "exports", "app-tools-utils", "data-service"], function (require, exports, util, dataService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logger = new util.App.Utils.Logger(util.LoggerMode.Toastr);
    function showMessage() {
        var messageProvider = new dataService.DataService();
        logger.log(messageProvider.getMessage());
    }
    exports.showMessage = showMessage;
});
//# sourceMappingURL=alerter.js.map