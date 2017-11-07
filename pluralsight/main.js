/// <reference path="./typings/require.d.ts" />
require.config({
    baseUrl: "./",
    paths: {
        jquery: "lib/jquery",
        toastr: "lib/toastr",
    }
});
require(['bootstrapper'], function (bootstrapper) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map