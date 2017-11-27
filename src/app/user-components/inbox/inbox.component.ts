import { Component, OnInit } from '@angular/core';
import { Message } from './inboxService';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public messages: Array<Message> = [
      new Message("Biblioteka", "Przypominamy o zbliżającym się terminie oddawania książki ...", "06.11.2017r."),
      new Message("Jan Kowalski", "Polecam przeczytać nowo wydaną książkę kryminalną ...", "31.10.2017r."),
      new Message("Biblioteka", "Dziś biblioteka nieczynna", "16.09.2017r.")
  ]

  constructor() { 

  }

  ngOnInit() {
  }

}
