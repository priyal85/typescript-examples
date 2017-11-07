let dogName = "Bingo";

export function changeDogName(name: string) {
    dogName = name;
}

export function logDogName() {
    console.log('dogNameA',dogName);
}

function doSomething() {
    for (var i = 0; i < 5; i++) {
       console.log(i);
    }
    console.log("Finally :",i);
}

let anyVariable;
anyVariable = "abc"
let endSwithC = (<string>anyVariable).substr(0,1);
endSwithC = (anyVariable as string).substr(0,1);
