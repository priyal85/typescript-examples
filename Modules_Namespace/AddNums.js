var AddNums;
(function (AddNums) {
    function add() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var total = 0;
        param.forEach(function (item) { return total = total + item; });
        console.log(total);
        return total;
    }
    AddNums.add = add;
    AddNums.result = 100;
    console.log(AddNums.result);
})(AddNums || (AddNums = {}));
//# sourceMappingURL=AddNums.js.map