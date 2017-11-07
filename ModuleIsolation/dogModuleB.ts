let dogName = "Scott";

export function changeDogName(name: string) {
    dogName = name;
}

export function logDogName() {
    console.log('dogNameB', dogName);
}