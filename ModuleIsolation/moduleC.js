define(["require", "exports", "./dogModuleA", "./dogModuleB"], function (require, exports, dogModuleA_1, dogModuleB_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    dogModuleA_1.logDogName();
    dogModuleB_1.logDogName();
    dogModuleA_1.changeDogName("Lasy");
    dogModuleB_1.changeDogName("Bruno");
    dogModuleA_1.logDogName();
    dogModuleB_1.logDogName();
});
//# sourceMappingURL=moduleC.js.map