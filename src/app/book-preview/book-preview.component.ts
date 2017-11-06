import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
model:BookModel = new BookModel(
'https://i.imgur.com/bKmWKrZ.jpg',
'Ruiny Gorlanu','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10);

  ngOnInit() {
    this.route.params.subscribe(param=>console.log(param.bookid));
  }

}
