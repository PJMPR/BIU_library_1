import { Component, OnInit } from '@angular/core';
import { Category } from '../right-menu/category';
import { SearchModel } from './SearchModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myForm: SearchModel;
  constructor() { }

  ngOnInit() {
  }

}
