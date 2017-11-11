import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-answer',
  templateUrl: './message-answer.component.html',
  styleUrls: ['./message-answer.component.css']
})
export class MessageAnswerComponent implements OnInit {


  constructor() { }

  emailList=[{ sender: "Mom", receiver: "Me"}];

  ngOnInit() {
  }

}
