import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel'

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  constructor() { }

  model:BookModel = new BookModel(
    'http://ecx.images-amazon.com/images/I/51fNaUnG5QL._SY445_QL70_.jpg',
    'lel','lol',['Andrzej Podsiadło','Andrzej Duda'],10);

  ngOnInit() {
  }

}
