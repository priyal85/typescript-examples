define(["require", "exports", "./exportingModule", "./defaultExportModule", "./exportingModule", "./reExportingModule", "./moduleWithSideEffect"], function (require, exports, exportingModule_1, defaultExportModule_1, exportModule, reExportingModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(exportingModule_1.exportedVariable);
    defaultExportModule_1.default();
    console.log('namespace', exportModule.exportedVariable);
    console.log('namespace', exportModule.hiddenVarible);
    console.log('ReExported', reExportingModule_1.reExportedHiddenVariable);
    console.log('ReExported', reExportingModule_1.reExportedVariable);
});
//# sourceMappingURL=importingModule.js.map