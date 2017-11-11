import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'message-show',
  templateUrl: './message-show.component.html',
  styleUrls: ['./message-show.component.css']
})
export class MessageShowComponent implements OnInit {

  

  constructor() { }
  
  emailList=[{subject:"Dinner", sender: "Mom", receiver: "Me", date: "Jan 8", content: "Buy chicken and carrots -- Mum"}];

  ngOnInit() {
  }

}
