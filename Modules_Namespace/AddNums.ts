namespace AddNums{
export function add(...param:number[]) {
    let total: number=0;
    param.forEach(item => total=total+item);
    console.log(total);
    return total;
}

export var result:number=100;
console.log(result);
}