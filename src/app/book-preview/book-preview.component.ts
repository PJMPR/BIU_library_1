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
'https://i.imgur.com/bKmWKrZ.jpg',
'Ruiny Gorlanu','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10);

ngOnInit() {
}

}
