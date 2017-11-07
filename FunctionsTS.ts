function getSum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(getSum(5, 9));

let mySum = function (num1: any, num2: any): number {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }

    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }

    return num1 + num2;
}

console.log(mySum('5', 10));

function getName(fName: string, lname?: string) {
    if (lname == undefined) {
        return fName;
    }
    return fName + " " + lname;
}
console.log(getName('John'));

function myVoid(): void {
    return;
}