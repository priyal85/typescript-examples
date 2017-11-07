/// <reference path="./typings/require.d.ts" />
require.config({
    baseUrl : "./",
    paths:{
        jquery: "lib/jquery",
        toastr: "lib/toastr",
    }
});

require(['bootstrapper'],
(bootstrapper) =>{
    bootstrapper.run();
}
);