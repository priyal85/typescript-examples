define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dogName = "Bingo";
    function changeDogName(name) {
        dogName = name;
    }
    exports.changeDogName = changeDogName;
    function logDogName() {
        console.log('dogNameA', dogName);
    }
    exports.logDogName = logDogName;
    function doSomething() {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
        console.log("Finally :", i);
    }
    var anyVariable;
    anyVariable = "abc";
    var endSwithC = anyVariable.substr(0, 1);
    endSwithC = anyVariable.substr(0, 1);
});
//# sourceMappingURL=dogModuleA.js.map