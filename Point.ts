export class Point{
    constructor(private x?:number, private y?:number){

    }

    set X(x:number){
      this.x =x;
    }

    get X(){
       return  this.x
    }

    
    public set Y(v : number) {
        if (v<0) {
            throw "Value cannot be less than 0.";
            
        }
        this.y = v;
    }
    
    
    public get Y()  {
        return this.y;
    }
    

    draw(){
        console.log("X :"+this.x +" Y:"+this.y) 
    }
}