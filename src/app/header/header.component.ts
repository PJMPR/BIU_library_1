import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './HeaderModel';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public model = new HeaderModel("s13900", 5, 0);


  constructor() { }

  ngOnInit() {
  }

}
