function add(...param:string[]) {
    let total: string='';
    param.forEach(item => total=total+item+"");
    console.log(total);
    return total;
}

var result:string="I am a var inside AddString file";
console.log(result);