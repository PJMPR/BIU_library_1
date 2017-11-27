import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model = new RegisterModel("kowalski", "haslo");
  constructor() { }

  ngOnInit() {
  }

}
