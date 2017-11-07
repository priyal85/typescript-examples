function add() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var total = '';
    param.forEach(function (item) { return total = total + item + ""; });
    console.log(total);
    return total;
}
var result = "I am a var inside AddString file";
console.log(result);
//# sourceMappingURL=AddStrings.js.map