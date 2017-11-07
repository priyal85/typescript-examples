interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payBill();
}

class User implements UserInterface {

    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User create: " + this.name);
    }

    register() {
        console.log(this.name + " is now registered");
    }

    payBill() {
        console.log(this.name + " paid the bill.");
    }
}
let john = new User("John", "john@hello.com", 55);
console.log("User age: " + john.age);

class Member extends User {
    private id: number;
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;

    }
    payBill() {
        super.payBill();

    }
}

let member: User = new Member(101, "Nimal", "nimal@hello.com", 34);
member.payBill();

