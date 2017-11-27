import { Component, OnInit } from '@angular/core';
import { BookModel } from './bookModel';
import { BookService } from '../../common-components/services/book-service';


@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  booklist1 = new BookService().model;
  constructor() { }

  ngOnInit() {

  }

}
