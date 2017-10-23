import { Component, OnInit } from '@angular/core';
import { SearchModel } from './SearchModel';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:SearchModel = new SearchModel();

  constructor() { 

  }

  ngOnInit() {
  }

}
