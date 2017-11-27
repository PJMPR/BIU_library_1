import { Injectable } from "@angular/core";


@Injectable()
export class Message {
    
    public sender: string;
    public contents: string;
    public dateOfMessage: string;
  
    constructor(sender:string, contents:string, dateOfMessage:string){
        this.sender = sender;
        this.contents = contents;
        this.dateOfMessage = dateOfMessage;
    }
  
}  