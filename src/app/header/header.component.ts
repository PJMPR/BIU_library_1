import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public model = {
    title: 'library',
    username: 's13900',
    numberOfMessages: 5
  };

  constructor() { }

  ngOnInit() {
  }

}
