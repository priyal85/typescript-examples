import {
    ExportedInterface,
    ExportedClass,
    exportedVariable as somevariable
} from './exportingModule';
console.log(somevariable);
import newNamedDefaultExpoetedFunction from './defaultExportModule'
newNamedDefaultExpoetedFunction();

import * as exportModule from './exportingModule';

import './moduleWithSideEffect';

console.log('namespace',exportModule.exportedVariable);

console.log('namespace',exportModule.hiddenVarible);


import { reExportedHiddenVariable,reExportedVariable} from './reExportingModule'

console.log('ReExported',reExportedHiddenVariable);

console.log('ReExported',reExportedVariable);
