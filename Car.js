var Car = /** @class */ (function () {
    function Car(engine, makeVarg) {
        this.engineType = engine;
        this.make = makeVarg;
        console.log(this.make);
        console.log(this.engineType);
        console.log("Hello World");
    }
    Car.prototype.start = function () {
        alert("Engine Sarted" + this.engineType);
    };
    Car.prototype.stop = function () {
        alert("Engine Soped" + this.engineType);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car(1500, "Toyota");
    car.start();
    car.stop();
};
//# sourceMappingURL=Car.js.map