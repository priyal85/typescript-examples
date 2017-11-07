var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User create: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.payBill = function () {
        console.log(this.name + " paid the bill.");
    };
    return User;
}());
var john = new User("John", "john@hello.com", 55);
console.log("User age: " + john.age);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payBill = function () {
        _super.prototype.payBill.call(this);
    };
    return Member;
}(User));
var member = new Member(101, "Nimal", "nimal@hello.com", 34);
member.payBill();
//# sourceMappingURL=ClassesTS.js.map