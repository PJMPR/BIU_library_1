import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './HeaderModel'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public model = new HeaderModel("Library", "s13900", 5);
  constructor() { }

  ngOnInit() {
  }

}
