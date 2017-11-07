class Car {
    engineType : number;
    make : string;
    constructor(engine : number, makeVarg : string){
        this.engineType = engine;
        this.make = makeVarg;
        console.log(this.make);
        console.log(this.engineType);
        console.log("Hello World");
    }

    start(){
        alert("Engine Sarted"+this.engineType)
    }

    stop(){
        alert("Engine Soped"+this.engineType)
    }
}
window.onload = function () {
    var car = new Car(1500,"Toyota");
    car.start();
    car.stop();
};