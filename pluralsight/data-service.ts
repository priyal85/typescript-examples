export interface IDataService{
    msg:string;
    getMessage : () => string;
}

export class DataService implements IDataService{
    msg = "Hello, from other side";

    getMessage(){
        return this.msg;
    }
}