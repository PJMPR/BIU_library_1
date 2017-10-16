import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  public model = new Person("");

  constructor() { }

  ngOnInit() {
  }

}

export class Person
{
  /**
   *
   */
  constructor(public firstName:string) {
    
  }
}