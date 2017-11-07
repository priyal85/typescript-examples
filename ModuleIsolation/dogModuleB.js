define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dogName = "Scott";
    function changeDogName(name) {
        dogName = name;
    }
    exports.changeDogName = changeDogName;
    function logDogName() {
        console.log('dogNameB', dogName);
    }
    exports.logDogName = logDogName;
});
//# sourceMappingURL=dogModuleB.js.map